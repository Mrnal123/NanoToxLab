import { NextRequest, NextResponse } from 'next/server'
import { createReadStream, statSync } from 'fs'
import { join } from 'path'

export async function GET(request: NextRequest) {
  try {
    const videoPath = join(process.cwd(), 'public', 'intro-video.mp4')
    const stat = statSync(videoPath)
    const fileSize = stat.size
    const range = request.headers.get('range')

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
      const chunksize = (end - start) + 1
      
      const stream = createReadStream(videoPath, { start, end })
      
      return new NextResponse(stream as any, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize.toString(),
          'Content-Type': 'video/mp4',
          'Cache-Control': 'no-cache',
        },
      })
    } else {
      const stream = createReadStream(videoPath)
      return new NextResponse(stream as any, {
        status: 200,
        headers: {
          'Content-Length': fileSize.toString(),
          'Content-Type': 'video/mp4',
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'no-cache',
        },
      })
    }
  } catch (error) {
    console.error('Error serving video:', error)
    return NextResponse.json({ error: 'Video not found' }, { status: 404 })
  }
}