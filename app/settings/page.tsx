"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Bell, Shield, Database, Palette, Globe, Key, Download, Trash2, Save } from "lucide-react"
import { Sidebar } from "../dashboard/sidebar"
import { Header } from "../dashboard/header"
import { DashboardFooter } from "../dashboard/footer"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-6 space-y-8">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Settings
                </h1>
                <p className="text-muted-foreground mt-2">
                  Manage your account preferences and application configuration
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline">
                  Reset to Defaults
                </Button>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>

            {/* Settings Tabs */}
            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="data">Data & Privacy</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                <div className="grid gap-6">
                  {/* Profile Settings */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Profile Settings</CardTitle>
                      <CardDescription>
                        Update your personal information and preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input id="organization" placeholder="University or Company" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="industry">Industry Professional</SelectItem>
                            <SelectItem value="regulator">Regulatory Affairs</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Language & Region */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        Language & Region
                      </CardTitle>
                      <CardDescription>
                        Set your preferred language and regional settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="English (US)" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en-us">English (US)</SelectItem>
                              <SelectItem value="en-gb">English (UK)</SelectItem>
                              <SelectItem value="es">Español</SelectItem>
                              <SelectItem value="fr">Français</SelectItem>
                              <SelectItem value="de">Deutsch</SelectItem>
                              <SelectItem value="zh">中文</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="UTC-5 (Eastern Time)" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="utc-8">UTC-8 (Pacific Time)</SelectItem>
                              <SelectItem value="utc-7">UTC-7 (Mountain Time)</SelectItem>
                              <SelectItem value="utc-6">UTC-6 (Central Time)</SelectItem>
                              <SelectItem value="utc-5">UTC-5 (Eastern Time)</SelectItem>
                              <SelectItem value="utc+0">UTC+0 (GMT)</SelectItem>
                              <SelectItem value="utc+1">UTC+1 (CET)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="w-5 h-5 mr-2" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>
                      Choose what notifications you want to receive
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications via email
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Simulation Completion</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when your simulations are complete
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Research Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Stay informed about new research and publications
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">System Maintenance</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive alerts about scheduled maintenance
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Marketing Communications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about new features and events
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <div className="grid gap-6">
                  {/* Password Settings */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Password & Authentication
                      </CardTitle>
                      <CardDescription>
                        Manage your password and security settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button className="w-full">
                        Update Password
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Two-Factor Authentication */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Two-Factor Authentication</CardTitle>
                      <CardDescription>
                        Add an extra layer of security to your account
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Enable 2FA</Label>
                          <p className="text-sm text-muted-foreground">
                            Use an authenticator app for additional security
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Button variant="outline" className="w-full">
                        <Key className="w-4 h-4 mr-2" />
                        Setup Authenticator App
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Active Sessions */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Active Sessions</CardTitle>
                      <CardDescription>
                        Manage your active login sessions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { device: "Chrome on Windows", location: "New York, US", current: true },
                          { device: "Safari on iPhone", location: "Boston, US", current: false },
                          { device: "Firefox on macOS", location: "San Francisco, US", current: false }
                        ].map((session, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-primary/20">
                            <div>
                              <p className="font-medium">{session.device}</p>
                              <p className="text-sm text-muted-foreground">
                                {session.location} {session.current && <Badge variant="outline" className="ml-2">Current</Badge>}
                              </p>
                            </div>
                            {!session.current && (
                              <Button variant="outline" size="sm">
                                Revoke
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="data" className="space-y-6">
                <div className="grid gap-6">
                  {/* Data Management */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Database className="w-5 h-5 mr-2" />
                        Data Management
                      </CardTitle>
                      <CardDescription>
                        Control how your data is stored and used
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Data Analytics</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow anonymous usage analytics to improve the platform
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Research Participation</Label>
                          <p className="text-sm text-muted-foreground">
                            Contribute anonymized data to research studies
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Data Retention</Label>
                          <p className="text-sm text-muted-foreground">
                            Automatically delete old simulation data
                          </p>
                        </div>
                        <Select>
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder="1 year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6months">6 months</SelectItem>
                            <SelectItem value="1year">1 year</SelectItem>
                            <SelectItem value="2years">2 years</SelectItem>
                            <SelectItem value="never">Never</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Export & Delete */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Export & Delete Data</CardTitle>
                      <CardDescription>
                        Download or permanently delete your account data
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">Export Account Data</p>
                          <p className="text-sm text-muted-foreground">
                            Download all your simulation data and account information
                          </p>
                        </div>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                        <div>
                          <p className="font-medium text-destructive">Delete Account</p>
                          <p className="text-sm text-muted-foreground">
                            Permanently delete your account and all associated data
                          </p>
                        </div>
                        <Button variant="destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="appearance" className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Palette className="w-5 h-5 mr-2" />
                      Appearance Settings
                    </CardTitle>
                    <CardDescription>
                      Customize the look and feel of the application
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Theme</Label>
                        <div className="grid grid-cols-3 gap-4">
                          {['Light', 'Dark', 'System'].map((theme) => (
                            <div key={theme} className="flex items-center space-x-2">
                              <input type="radio" name="theme" value={theme.toLowerCase()} className="sr-only" />
                              <div className="w-full p-4 rounded-lg border border-primary/20 hover:border-primary/40 cursor-pointer transition-colors">
                                <p className="text-center font-medium">{theme}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Compact Mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Reduce spacing and padding for a more compact interface
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Animations</Label>
                          <p className="text-sm text-muted-foreground">
                            Enable smooth transitions and animations
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Label htmlFor="fontSize">Font Size</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Medium" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                            <SelectItem value="extra-large">Extra Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <div className="grid gap-6">
                  {/* API Settings */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>API Configuration</CardTitle>
                      <CardDescription>
                        Manage API keys and integration settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="apiKey">API Key</Label>
                        <div className="flex space-x-2">
                          <Input id="apiKey" value="sk-..." type="password" readOnly />
                          <Button variant="outline">Regenerate</Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="webhookUrl">Webhook URL</Label>
                        <Input id="webhookUrl" placeholder="https://your-app.com/webhook" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Performance Settings */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Performance Settings</CardTitle>
                      <CardDescription>
                        Configure performance and resource usage
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="maxSimulations">Max Concurrent Simulations</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="5" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Auto-save Results</Label>
                          <p className="text-sm text-muted-foreground">
                            Automatically save simulation results
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Debug Settings */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Debug & Diagnostics
                      </CardTitle>
                      <CardDescription>
                        Advanced settings for troubleshooting
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Debug Mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Enable detailed logging and error reporting
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Performance Monitoring</Label>
                          <p className="text-sm text-muted-foreground">
                            Track performance metrics and resource usage
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Button variant="outline" className="w-full">
                        Download Debug Logs
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </main>
          <DashboardFooter />
        </div>
      </div>
    </div>
  )
}