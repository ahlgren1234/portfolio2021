"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"

const Form = () => {

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "bc6ca519-a7e7-4a8f-b5b2-0b496fbe5aba",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Your message has been sent. Thank you so much =)")
      
    }
}

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      { /* input */}
      <div className="relative flex items-center">
        <Input type="name" name="name" required id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      { /* input */}
      <div className="relative flex items-center">
        <Input type="email" name="email" required id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      { /* textarea */}
      <div className="relative flex items-center">
        <Textarea name="message" required id="message" placeholder="Message" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  )
}

export default Form