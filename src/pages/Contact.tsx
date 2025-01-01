import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", firstName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="py-12 bg-gradient-to-br from-pizza-900 via-pizza-800 to-pizza-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-pizza-100 mb-4">Contact</h1>
          <p className="text-lg text-pizza-200">
            Une question ? N'hésitez pas à nous contacter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-pizza-100 mb-6">
                  Informations
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-pizza-300 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-pizza-100">Téléphone</p>
                      <a
                        href="tel:0240821068"
                        className="text-pizza-200 hover:text-pizza-300 transition-colors"
                      >
                        02 40 82 10 68
                      </a>
                      <br />
                      <a
                        href="tel:0681404029"
                        className="text-pizza-200 hover:text-pizza-300 transition-colors"
                      >
                        06 81 40 40 29
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-pizza-300 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-pizza-100">Adresse</p>
                      <p className="text-pizza-200">
                        4 Rue des Jaunins
                        <br />
                        Bourgneuf en Retz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-pizza-100 mb-1"
                >
                  Nom
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-pizza-800/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400"
                />
              </div>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-pizza-100 mb-1"
                >
                  Prénom
                </label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                  className="bg-pizza-800/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-pizza-100 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-pizza-800/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-pizza-100 mb-1"
                >
                  Téléphone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-pizza-800/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-pizza-100 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[150px] bg-pizza-800/50 border-pizza-700 text-pizza-100 placeholder:text-pizza-400"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-pizza-600 hover:bg-pizza-700 text-white"
              >
                Envoyer
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;