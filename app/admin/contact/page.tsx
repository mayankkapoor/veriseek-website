"use client"

import { useState, useEffect } from "react"
import { dataStore, type ContactSubmission } from "@/lib/client-data-store"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Search, Download, RefreshCw } from "lucide-react"

export default function ContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    // Load data from client-side store
    loadSubmissions()
  }, [])

  function loadSubmissions() {
    setLoading(true)
    // Simulate network delay for a more realistic experience
    setTimeout(() => {
      const data = dataStore.getContactSubmissions()
      setSubmissions(data)
      setLoading(false)
    }, 500)
  }

  const filteredSubmissions = submissions.filter((sub) => {
    // Apply status filter
    if (filter !== "all" && sub.status !== filter) {
      return false
    }

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase()
      return (
        sub.name.toLowerCase().includes(searchLower) ||
        sub.email.toLowerCase().includes(searchLower) ||
        sub.subject.toLowerCase().includes(searchLower) ||
        (sub.message && sub.message.toLowerCase().includes(searchLower))
      )
    }

    return true
  })

  const exportToCSV = () => {
    // Create CSV content
    const headers = ["ID", "Created At", "Name", "Email", "Phone", "Subject", "Message", "Status"]

    const csvRows = [
      headers.join(","),
      ...filteredSubmissions.map((sub) =>
        [
          sub.id,
          sub.created_at,
          `"${sub.name.replace(/"/g, '""')}"`,
          `"${sub.email.replace(/"/g, '""')}"`,
          `"${sub.phone?.replace(/"/g, '""') || ""}"`,
          `"${sub.subject.replace(/"/g, '""')}"`,
          `"${sub.message.replace(/"/g, '""')}"`,
          sub.status,
        ].join(","),
      ),
    ]

    const csvContent = csvRows.join("\n")

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `contact-submissions-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Contact Submissions</h1>
        <div className="flex gap-2">
          <Button onClick={loadSubmissions} variant="outline" size="icon" className="h-9 w-9" title="Refresh data">
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Refresh</span>
          </Button>
          <Button
            onClick={exportToCSV}
            className="bg-primary text-white hover:bg-primary/90"
            disabled={filteredSubmissions.length === 0}
          >
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search submissions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
          <Button variant="ghost" className="px-3">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="read">Read</SelectItem>
            <SelectItem value="responded">Responded</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="rounded-md bg-gray-50 p-8 text-center text-gray-500">No contact submissions found</div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((sub) => (
                <TableRow key={sub.id}>
                  <TableCell className="font-medium">{sub.name}</TableCell>
                  <TableCell>{sub.email}</TableCell>
                  <TableCell>{sub.subject}</TableCell>
                  <TableCell className="max-w-xs truncate">{sub.message}</TableCell>
                  <TableCell>{new Date(sub.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Select
                      defaultValue={sub.status}
                      onValueChange={(value) => {
                        // Update in client-side store
                        dataStore.updateContactSubmission(sub.id, { status: value })
                        // Update local state
                        setSubmissions((prev) => prev.map((s) => (s.id === sub.id ? { ...s, status: value } : s)))
                      }}
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="read">Read</SelectItem>
                        <SelectItem value="responded">Responded</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

