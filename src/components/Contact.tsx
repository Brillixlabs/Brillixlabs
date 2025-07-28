import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';
import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submitted with data:', data);
    setIsSubmitting(true);
    try {
      console.log('Attempting to send email...');
      await sendContactEmail(data);
      console.log('Email sent successfully');
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to transform your ideas into reality? Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="slide-in-left space-y-6 sm:space-y-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base">Phone</div>
                    <div className="text-muted-foreground text-sm sm:text-base">+94(71) 377 5822</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base">Location</div>
                    <div className="text-muted-foreground text-sm sm:text-base">Sri Lanka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <div className="glass-card p-6 sm:p-8 rounded-2xl w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Start Your Project</h3>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      {...register('name')}
                      className={`w-full p-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                        errors.name ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      {...register('email')}
                      className={`w-full p-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                        errors.email ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    {...register('projectType')}
                    className={`w-full p-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                      errors.projectType ? 'border-red-500' : 'border-border'
                    }`}
                  >
                    <option value="">Select project type</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Enterprise Solution">Enterprise Solution</option>
                    <option value="Custom Development">Custom Development</option>
                  </select>
                  {errors.projectType && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.projectType.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    className={`w-full p-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm ${
                      errors.message ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  variant="gradient" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}