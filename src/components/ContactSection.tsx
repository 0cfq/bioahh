import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "hello@example.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-muted-foreground mb-8">
              Have a project in mind? Let's build it.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                className="bg-secondary border-border"
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary border-border"
                required
              />
              <Textarea
                placeholder="Your message"
                rows={4}
                className="bg-secondary border-border resize-none"
                required
              />
              <Button type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm mb-3">Or</p>
              <div className="flex items-center gap-3">
                <span className="text-foreground font-medium">{email}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={copyEmail}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy email
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
