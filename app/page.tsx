import AuthenticatedButton from "@/components/AuthenticatedButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  CheckCircle,
  Globe,
  MessageSquare,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="gradient-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top, rgba(120,119,198,0,3), transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <Badge
              className="mb-4 bg-linear-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border-blue-500/30
            dark:text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30"
            >
              <Sparkles className="h-3 w-3 text-yellow-500" />
              Propulsé par Bright Data et OpenAI
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span
                className="bg-linear-to-r from-slate-800 via-blue-800 to-slate-800 text-transparent bg-clip-text
              dark:from-white dark:via-blue-100 dark:to-white"
              >
                Générez de beau
              </span>
              <span className="block bg-linear-to-r from-blue-600 via-purple-600 to-pink-400 text-transparent bg-clip-text p-2">
                Rapports SEO
              </span>
              <span
                className="bg-linear-to-r from-slate-800 via-blue-800 to-slate-800 text-transparent bg-clip-text
              dark:from-white dark:via-blue-100 dark:to-white"
              >
                en quelques secondes
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto sm:text-xl">
              Exploitez la puissance du SERP Perplexity Scraper de Bright Data
              pour créer instantanément des rapports SEO complets.
              <span className="text-foreground font-medium">
                {" "}
                Rapide, simple et incroyablement perspicace.
              </span>
            </p>

            <AuthenticatedButton />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Choisissez votre super pouvoir SEO
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Que vous soyez débutant ou que vous ayez besoin d'informations
              avancées, nous avons le plan idéal pour vous.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Starter Plan */}
            <Card className="relative overflow-hidden card-gradient">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-400/20 to-cyan-400/20 rounded-full -translate-y-16 translate-x-16" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 text-white">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 font-medium">
                    Starter
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Rapport SEO complet</CardTitle>
                <CardDescription className="text-base">
                  Générez des rapports SEO complets grâce à la technologie SERP
                  Perplexity Scraper de Bright Data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Rapport SEO complet</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Informations sur le classement des mots-clés</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Analyse de la concurrence</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Export en PDF ou CSV</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card
              className="relative overflow-hidden border-2 border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300
            hover:shadow-2xl hover:shadow-purple-500/25 group bg-linear-to-br from-purple-50/80 via-pink-50/80 to-orange-50/80 dark:from-purple-950/80 dark:via-pink-950/80 dark:to-orange-950/80"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-purple-400/30 via-pink-400/30 to-orange-400/30 rounded-full -translate-y-16 translate-x-16" />
              <Badge className="absolute top-4 right-4 bg-linear-to-r from-purple-600 to-pink-600 text-white border-0">
                <Sparkles className="h-3 w-3 text-yellow-500" />
                Populaire
              </Badge>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <Badge
                    className="bg-linear-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200
                  dark:from-purple-900 dark:to-pink-900 dark:text-purple-300 border-0"
                  >
                    Pro
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  Discutez avec votre rapport
                </CardTitle>
                <CardDescription className="text-base">
                  Tout dans Starter, plus le pouvoir de discuter avec vos
                  données SEO en utilisant GPT.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Toutes les fonctionnalités de Starter</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Interface de chat alimentée par l'IA</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Posez des questions sur vos données</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Obtenez des recommandations exploitable</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Support prioritaire</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 sm:py-32 bg-linear-to-r from-emerald-50/50 via-blue-50/50 to-purple-50/50 dark:from-emerald-950/50 dark:via-blue-950/50 dark:to-purple-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Tarification simple et transparente
            </h2>
            <p className="text-lg text-muted-foreground">
              Choisissez le plan qui correspond à vos besoins. Upgradez ou
              changez de plan à tout moment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Pricing */}
            <Card
              className="hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-blue-200 
            dark:border-blue-800 bg-linear-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/80 dark:to-cyan-950/80"
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl mb-2">Starter</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
                    19.-
                  </span>
                  <span className="text-base text-muted-foreground">
                    / mois
                  </span>
                </div>
                <CardDescription className="mt-2">
                  Parfait pour les petites entreprises et marketeurs freelance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Bright Data SERP scraping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Support par mail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Export en PDF ou CSV</span>
                  </div>
                </div>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    className="w-full mt-6 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Souscrire à Starter
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Pricing */}
            <Card
              className="relative hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border-2 border-purple-300 
            dark:border-purple-800 bg-linear-to-br from-purple-50/80 via-pink-50/80 to-orange-50/80 dark:from-purple-950/80 dark:via-pink-950/80 dark:to-orange-950/80"
            >
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-600 to-pink-600 text-white border-0">
                Plus Populaire
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl mb-2">Pro</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    49.-
                  </span>
                  <span className="text-base text-muted-foreground">
                    / mois
                  </span>
                </div>
                <CardDescription className="mt-2">
                  Pour les agences et les utilisateurs expérimentés.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Toutes les fonctionnalités de Starter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Interface de chat alimentée par l'IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Support prioritaire</span>
                  </div>
                </div>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    className="w-full mt-6 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Souscrire à Pro
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Propulsé par des experts du secteur
            </h2>
            <p className="text-muted-foreground">
              Construit avec une technologie et une sécurité de niveau
              professionnel auxquelles vous pouvez faire confiance.
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60
          hover:opacity-80 transition-opacity duration-300"
          >
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Globe className="h-6 w-6" />
                <span>Bright Data</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Zap className="h-6 w-6" />
                <span>Vercel</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <MessageSquare className="h-6 w-6" />
                <span>OpenAI</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Shield className="h-6 w-6" />
                <span>Clerk</span>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 
            dark:bg-green-900/20 border border-green-200 dark:border-green-800"
            >
              <ShieldCheck className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Sécurité de niveau entreprise et disponibilité garantie à 99.9 %
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
