"use client"

import { DecorativeHeart } from "../decorative-heart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DonationForm() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <h2 className="font-poppins text-3xl font-bold text-primary mb-4">Make a Donation</h2>
        <p className="font-raleway text-gray-600">
          Your generosity helps us create lasting positive change in communities around the world.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h3 className="font-poppins text-2xl font-bold text-primary mb-6 text-center">Donation Form</h3>

        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Enter your last name" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email address" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>

          <div className="space-y-2">
            <Label>Donation Amount</Label>
            <RadioGroup defaultValue="1000" className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="500" id="amount-500" />
                <Label htmlFor="amount-500">₹500</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1000" id="amount-1000" />
                <Label htmlFor="amount-1000">₹1,000</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2500" id="amount-2500" />
                <Label htmlFor="amount-2500">₹2,500</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="5000" id="amount-5000" />
                <Label htmlFor="amount-5000">₹5,000</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="amount-custom" />
                <Label htmlFor="amount-custom">Custom Amount</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-amount">Custom Amount (₹)</Label>
            <Input id="custom-amount" type="number" placeholder="Enter custom amount" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="donation-type">Donation Type</Label>
            <Select>
              <SelectTrigger id="donation-type">
                <SelectValue placeholder="Select donation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one-time">One-time Donation</SelectItem>
                <SelectItem value="monthly">Monthly Donation</SelectItem>
                <SelectItem value="quarterly">Quarterly Donation</SelectItem>
                <SelectItem value="annually">Annual Donation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="donation-purpose">Purpose of Donation</Label>
            <Select>
              <SelectTrigger id="donation-purpose">
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Fund</SelectItem>
                <SelectItem value="education">Education Programs</SelectItem>
                <SelectItem value="vocational">Vocational Training</SelectItem>
                <SelectItem value="refugee">Refugee Support</SelectItem>
                <SelectItem value="cultural">Cultural Programs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
            Proceed to Payment
          </Button>
        </form>
      </div>
    </div>
  )
}
