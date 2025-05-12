"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    schoolCity: "",
    grade: "",
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

  const handleSubmit = async (e: React.FormEvent, shouldRedirectToPayment: boolean = false) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.school ||
      !formData.schoolCity ||
      !formData.grade ||
      !formData.howHeard ||
      !formData.agreeTerms
    ) {
      setFormError("Please fill in all required fields and agree to the terms");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    try {
      // Get the form element by searching the DOM
      const form = document.querySelector('form') as HTMLFormElement;
      
      if (!form) {
        throw new Error("Form element not found");
      }
      
      const formDataToSubmit = new FormData(form);
      formDataToSubmit.append("program", "sharkathon");

      const result = await submitRegistration(formDataToSubmit);

      if (result.success) {
        if (shouldRedirectToPayment) {
          // Redirect to payment page
          window.location.href = "https://rzp.io/rzp/asKBH0Ak";
        } else {
          setFormSubmitted(true);
        }
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
            Thank you for registering for Sharkathon!
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
                schoolCity: "",
                grade: "",
                howHeard: "",
                agreeTerms: false,
              });
            }}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Register Another Student
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-8">
        <form onSubmit={(e) => handleSubmit(e, false)}>
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
                  <Label htmlFor="schoolCity">School City *</Label>
                  <Input
                    id="schoolCity"
                    name="schoolCity"
                    value={formData.schoolCity}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Grade Level *</Label>
                  <Select
                    name="grade"
                    value={formData.grade}
                    onValueChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        grade: value,
                      }));
                    }}
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
              </div>
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

            <div className="flex justify-end gap-4 mt-6">
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-primary/90"
                disabled={!formData.agreeTerms || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Enquire More"
                )}
              </Button>
              <Button
                type="button"
                className="bg-primary text-white hover:bg-primary/90"
                disabled={!formData.agreeTerms || isSubmitting}
                onClick={(e) => {
                  // Call the same submit handler but with the payment flag set to true
                  handleSubmit(e, true);
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Pay Now"
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;