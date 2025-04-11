"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitRegistration } from "@/app/actions/registration";
import { dataStore } from "@/lib/client-data-store";

const RegistrationForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    teamName: "",
    teamSize: "",
    projectIdea: "",
    howHeard: "",
    agreeTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      agreeTerms: checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.teamName ||
      !formData.teamSize ||
      !formData.projectIdea ||
      !formData.howHeard ||
      !formData.agreeTerms
    ) {
      setFormError("Please fill in all required fields and agree to the terms");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      formData.append("program", "sharkathon");

      const result = await submitRegistration(formData);

      if (result.success) {
        setFormSubmitted(true);
      } else {
        setFormError(result.message);
      }
    } catch (error) {
      setFormError("An unexpected error occurred. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <Card className="border-none shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            Registration Successful!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for registering for Sharkathon! We've sent a confirmation
            email to {formData.email} with next steps.
          </p>
          <Button
            onClick={() => {
              setFormSubmitted(false);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                school: "",
                grade: "",
                teamName: "",
                teamSize: "",
                projectIdea: "",
                howHeard: "",
                agreeTerms: false,
              });
            }}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Register Another Team
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit}>
          {formError && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md">
              {formError}
            </div>
          )}

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="school">School Name *</Label>
                  <Input
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Grade Level *</Label>
                  <Select
                    name="grade"
                    value={formData.grade}
                    onValueChange={(value) =>
                      handleSelectChange("grade", value)
                    }
                    required
                  >
                    <SelectTrigger id="grade">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">9th Grade</SelectItem>
                      <SelectItem value="10">10th Grade</SelectItem>
                      <SelectItem value="11">11th Grade</SelectItem>
                      <SelectItem value="12">12th Grade</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="grade" value={formData.grade} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">
                Team & Project Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="teamName">Team Name *</Label>
                  <Input
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamSize">Team Size *</Label>
                  <Select
                    name="teamSize"
                    value={formData.teamSize}
                    onValueChange={(value) =>
                      handleSelectChange("teamSize", value)
                    }
                    required
                  >
                    <SelectTrigger id="teamSize">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Individual (1 person)</SelectItem>
                      <SelectItem value="2">2 members</SelectItem>
                      <SelectItem value="3">3 members</SelectItem>
                      <SelectItem value="4">4 members</SelectItem>
                    </SelectContent>
                  </Select>
                  <input
                    type="hidden"
                    name="teamSize"
                    value={formData.teamSize}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectIdea">
                  Brief Project Idea Description *
                </Label>
                <Textarea
                  id="projectIdea"
                  name="projectIdea"
                  value={formData.projectIdea}
                  onChange={handleInputChange}
                  placeholder="Describe your business idea in 200 words or less"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="howHeard">
                  How did you hear about Sharkathon? *
                </Label>
                <Select
                  name="howHeard"
                  value={formData.howHeard}
                  onValueChange={(value) =>
                    handleSelectChange("howHeard", value)
                  }
                  required
                >
                  <SelectTrigger id="howHeard">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school">School</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="friend">Friend/Family</SelectItem>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <input
                  type="hidden"
                  name="howHeard"
                  value={formData.howHeard}
                />
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={handleCheckboxChange}
                  required
                />
                <Label htmlFor="agreeTerms" className="text-sm">
                  I agree to the{" "}
                  <a href="/rules" className="text-primary underline">
                    rules and regulations
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-primary underline">
                    privacy policy
                  </a>
                  .
                </Label>
              </div>

              <div className="flex justify-end mt-6">
                <Button
                  type="submit"
                  className="bg-primary text-white hover:bg-primary/90"
                  disabled={!formData.agreeTerms || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
