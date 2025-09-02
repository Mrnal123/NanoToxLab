"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Upload, FileText, Beaker, Settings, Play, Loader2 } from "lucide-react"

interface SimulationParams {
  nanomaterialType: string
  file: File | null
  concentration: string
  temperature: string
  phLevel: string
  drugLoading: string
  testTypes: {
    toxicity: boolean
    drugRelease: boolean
    offTarget: boolean
  }
}

export function SimulationForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [params, setParams] = useState<SimulationParams>({
    nanomaterialType: "",
    file: null,
    concentration: "",
    temperature: "",
    phLevel: "",
    drugLoading: "",
    testTypes: {
      toxicity: false,
      drugRelease: false,
      offTarget: false,
    },
  })

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.name.endsWith(".pdb") || file.name.endsWith(".mol") || file.name.endsWith(".sdf")) {
        setParams((prev) => ({ ...prev, file }))
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setParams((prev) => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("[v0] Simulation parameters:", params)
    router.push("/results")
  }

  const isFormValid =
    params.nanomaterialType &&
    params.file &&
    params.concentration &&
    params.temperature &&
    params.phLevel &&
    params.drugLoading &&
    (params.testTypes.toxicity || params.testTypes.drugRelease || params.testTypes.offTarget)

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Nanomaterial Type Selection */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Beaker className="h-5 w-5" />
            Nanomaterial Type
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={params.nanomaterialType}
            onValueChange={(value) => setParams((prev) => ({ ...prev, nanomaterialType: value }))}
          >
            <SelectTrigger className="w-full bg-input border-border/50 focus:border-primary focus:ring-primary/20">
              <SelectValue placeholder="Select nanomaterial type" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border/50">
              <SelectItem value="0d-nanoparticle">0D Nanoparticle</SelectItem>
              <SelectItem value="1d-nanotube">1D Nanotube</SelectItem>
              <SelectItem value="2d-nanosheet">2D Nanosheet</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* File Upload */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Upload className="h-5 w-5" />
            Drug Molecule Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
              dragActive
                ? "border-primary bg-primary/10"
                : "border-border/50 hover:border-primary/50 hover:bg-primary/5"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".pdb,.mol,.sdf"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              {params.file ? (
                <div>
                  <p className="text-foreground font-medium">{params.file.name}</p>
                  <p className="text-muted-foreground text-sm">File uploaded successfully</p>
                </div>
              ) : (
                <div>
                  <p className="text-foreground font-medium">Drop your file here or click to browse</p>
                  <p className="text-muted-foreground text-sm">Supports .pdb, .mol, .sdf files</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Simulation Parameters */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Settings className="h-5 w-5" />
            Simulation Parameters
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="concentration" className="text-foreground">
              Concentration (mg/mL)
            </Label>
            <Input
              id="concentration"
              type="number"
              step="0.01"
              placeholder="e.g., 1.5"
              value={params.concentration}
              onChange={(e) => setParams((prev) => ({ ...prev, concentration: e.target.value }))}
              className="bg-input border-border/50 focus:border-primary focus:ring-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="temperature" className="text-foreground">
              Temperature (°C)
            </Label>
            <Input
              id="temperature"
              type="number"
              placeholder="e.g., 37"
              value={params.temperature}
              onChange={(e) => setParams((prev) => ({ ...prev, temperature: e.target.value }))}
              className="bg-input border-border/50 focus:border-primary focus:ring-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phLevel" className="text-foreground">
              pH Level
            </Label>
            <Input
              id="phLevel"
              type="number"
              step="0.1"
              min="0"
              max="14"
              placeholder="e.g., 7.4"
              value={params.phLevel}
              onChange={(e) => setParams((prev) => ({ ...prev, phLevel: e.target.value }))}
              className="bg-input border-border/50 focus:border-primary focus:ring-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="drugLoading" className="text-foreground">
              Drug Loading (%)
            </Label>
            <Input
              id="drugLoading"
              type="number"
              step="0.1"
              min="0"
              max="100"
              placeholder="e.g., 15.5"
              value={params.drugLoading}
              onChange={(e) => setParams((prev) => ({ ...prev, drugLoading: e.target.value }))}
              className="bg-input border-border/50 focus:border-primary focus:ring-primary/20"
            />
          </div>
        </CardContent>
      </Card>

      {/* Test Types */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-primary">Analysis Types</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/30">
            <div className="space-y-1">
              <Label htmlFor="toxicity" className="text-foreground font-medium">
                Toxicity Prediction
              </Label>
              <p className="text-sm text-muted-foreground">Predict potential toxic effects and safety profile</p>
            </div>
            <Switch
              id="toxicity"
              checked={params.testTypes.toxicity}
              onCheckedChange={(checked) =>
                setParams((prev) => ({
                  ...prev,
                  testTypes: { ...prev.testTypes, toxicity: checked },
                }))
              }
            />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/30">
            <div className="space-y-1">
              <Label htmlFor="drugRelease" className="text-foreground font-medium">
                Drug Release Profile
              </Label>
              <p className="text-sm text-muted-foreground">Analyze drug release kinetics and patterns</p>
            </div>
            <Switch
              id="drugRelease"
              checked={params.testTypes.drugRelease}
              onCheckedChange={(checked) =>
                setParams((prev) => ({
                  ...prev,
                  testTypes: { ...prev.testTypes, drugRelease: checked },
                }))
              }
            />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/30">
            <div className="space-y-1">
              <Label htmlFor="offTarget" className="text-foreground font-medium">
                Off-target Effects
              </Label>
              <p className="text-sm text-muted-foreground">Identify potential unintended interactions</p>
            </div>
            <Switch
              id="offTarget"
              checked={params.testTypes.offTarget}
              onCheckedChange={(checked) =>
                setParams((prev) => ({
                  ...prev,
                  testTypes: { ...prev.testTypes, offTarget: checked },
                }))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-center pt-6">
        <Button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Running Simulation...
            </>
          ) : (
            <>
              <Play className="mr-2 h-5 w-5" />
              Run Simulation
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
