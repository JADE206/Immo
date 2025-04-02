
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, FileText, BarChart2, Gavel } from "lucide-react";

const steps = [
  "Property Information",
  "Required Documents",
  "Ad Tracking",
  "Legal Resources",
];

export default function SellerDashboard() {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    squareFootage: "",
    rooms: "",
    location: "",
    description: "",
  });

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-[#F1F1F1] p-4 fixed h-full">
        <nav className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className={\`flex items-center cursor-pointer p-2 rounded-md \${activeStep === index ? "bg-[#4A90E2] text-white" : "text-gray-700"}\`}
            >
              {index === 0 && <MapPin className="mr-2" />}
              {index === 1 && <FileText className="mr-2" />}
              {index === 2 && <BarChart2 className="mr-2" />}
              {index === 3 && <Gavel className="mr-2" />}
              <span>{step}</span>
            </div>
          ))}
        </nav>
      </aside>

      <main className="ml-64 flex-1 p-8">
        <Progress value={(activeStep / (steps.length - 1)) * 100} className="mb-6" />

        {activeStep === 0 && (
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-bold">Property Information</h2>
              <Input
                type="number"
                placeholder="Square Footage"
                value={form.squareFootage}
                onChange={(e) => setForm({ ...form, squareFootage: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Number of Rooms"
                value={form.rooms}
                onChange={(e) => setForm({ ...form, rooms: e.target.value })}
              />
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Location"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
                <Button>Locate on map</Button>
              </div>
              <Textarea
                placeholder="Property description..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
              <div>
                <label className="block mb-2">Add Photos</label>
                <Input type="file" multiple />
              </div>
              <div className="mt-4 p-4 border rounded-md">
                <p>Estimated Price: ${(Number(form.squareFootage) * 3200).toLocaleString()} €</p>
              </div>
            </CardContent>
          </Card>
        )}

        {activeStep === 1 && (
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Required Documents</h2>
              {["DPE", "Cadastre", "Floor Plan", "Notarial Deed"].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span>{doc}</span>
                  <Input type="file" className="w-1/2" />
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {activeStep === 2 && (
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Ad Tracking</h2>
              <div className="grid grid-cols-3 gap-4">
                <Card><CardContent className="p-4">Views: 128</CardContent></Card>
                <Card><CardContent className="p-4">Messages: 12</CardContent></Card>
                <Card><CardContent className="p-4">Visits: 5</CardContent></Card>
              </div>
              <div>
                <h3 className="font-semibold mt-4">Interaction History</h3>
                <table className="w-full text-sm mt-2">
                  <thead>
                    <tr><th>Buyer</th><th>Message</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>John D.</td><td>Interested in visit</td><td>Replied</td></tr>
                    <tr><td>Anna M.</td><td>Wants more photos</td><td>Pending</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Visit Calendar</h3>
                <Calendar />
              </div>
            </CardContent>
          </Card>
        )}

        {activeStep === 3 && (
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Legal Resources</h2>
              <Button variant="link">Seller's Guide</Button>
              <div>
                <h3 className="font-semibold">Partner Notaries</h3>
                <ul className="space-y-2 mt-2">
                  <li className="flex justify-between"><span>Me. Lefevre</span><Button size="sm">Contact</Button></li>
                  <li className="flex justify-between"><span>Me. Dubois</span><Button size="sm">Contact</Button></li>
                </ul>
              </div>
              <div className="border p-4 mt-4 rounded-md">
                <label>Enter Property Price (€)</label>
                <Input
                  type="number"
                  onChange={(e) => {
                    const price = parseFloat(e.target.value);
                    const notary = price * 0.08;
                    const app = price * 0.01;
                    alert(`Estimated Fees:\nNotary: €${notary}\nApp: €${app}`);
                  }}
                />
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
