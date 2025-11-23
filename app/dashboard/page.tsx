"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CountrySelector from "@/components/CountrySelector";
import { useRouter } from "next/navigation";
import startScraping from "@/actions/startScraping";

function DashboardPage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [country, setCountry] = useState("CH");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt || isLoading) return;

    setIsLoading(true);
    try {
      const response = await startScraping({ prompt, undefined, country });

      if (response.ok) {
        console.log(response.data);
        const snapshotId = response.data.snapshot_id;
        router.push(`/dashboard/report/${snapshotId}`);
      }
    } catch (error) {
      console.error("Error generating report:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Create Report Section */}
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-linear-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 
          dark:from-blue-950/80 dark:via-purple-950/80 dark:to-pink-950/80 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-br from-purple-400/15 to-blue-400/15 rounded-full translate-y-16 -translate-x-16" />

            <CardHeader className="text-center pb-6 relative">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                  <Sparkles className="h-6 w-6" />
                </div>
                <CardTitle className="text-3xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Créer un nouveau rapport
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Entrez un nom de business, un produit, ou un site web pour générer une
                <span className="text-foreground font-semibold">
                  {" "}
                  analyse SEO complète
                </span>{" "}
                boosté par l'IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-1/2 tranform -translate-y-1/2 p-1 rounded-md bg-blue-100 dark:bg-blue-900/30 z-10">
                      <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Entrez un Nom / Business / Produit, Site web etc"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      disabled={isLoading}
                      className="input-form"
                    />
                  </div>

                  <CountrySelector
                    value={country}
                    onValueChange={setCountry}
                    disabled={isLoading}
                  />

                  <div>
                    <Button 
                    type="submit" 
                    size="lg" 
                    className="h-14 px-6 md:px-8 text-blue-50 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600
                    hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 border-0 shadow-lg hover:shadow-xl
                    hover:shadow-purple-500/25 transition-all duration-300 group font-semibold w-full md:w-auto"
                    disabled={isLoading || !prompt.trim()}>
                      {isLoading ? (
                        <>
                         <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-3" />
                         <span className="hidden lg:inline">Génération du rapport...</span>
                         <span className="lg:hidden">Génération...</span>
                        </>
                      ) : (
                        <>
                         <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                         <span className="hidden lg:inline">Générer mon rapport</span>
                         <span className="lg:hidden">Générer</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage