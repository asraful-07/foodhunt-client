"use client";

import Link from "next/link";
import { ShoppingBag, Briefcase } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

import CustomerRegisterForm from "./CustomerRegisterForm";
import ProviderRegisterForm from "./ProviderRegisterForm";

export default function RegisterForm() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-violet-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 px-4 py-10">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-300/20 dark:bg-violet-700/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-300/20 dark:bg-indigo-700/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-amber-200/10 dark:bg-amber-600/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-lg">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-xl shadow-violet-500/30 mb-4">
            <ShoppingBag className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Create an account
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
            Join us as a customer or a service provider
          </p>
        </div>

        {/* Tab Card */}
        <Card className="border-0 shadow-2xl shadow-slate-200/80 dark:shadow-slate-950/80 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-6 pt-6">
            <Tabs defaultValue="customer" className="w-full">
              {/* Tab Switcher */}
              <TabsList className="grid grid-cols-2 w-full mb-6 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 p-1 gap-1">
                <TabsTrigger
                  value="customer"
                  className="rounded-xl h-full font-semibold text-sm transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300 data-[state=active]:shadow-sm flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Customer
                </TabsTrigger>
                <TabsTrigger
                  value="provider"
                  className="rounded-xl h-full font-semibold text-sm transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:text-amber-600 dark:data-[state=active]:text-amber-400 data-[state=active]:shadow-sm flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  Provider
                </TabsTrigger>
              </TabsList>

              {/* ── Customer Tab ── */}
              <TabsContent value="customer" className="mt-0">
                <div className="mb-5">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Customer Registration
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                    Browse services and book with ease
                  </p>
                </div>
                <CustomerRegisterForm />
              </TabsContent>

              {/* ── Provider Tab ── */}
              <TabsContent value="provider" className="mt-0">
                <div className="mb-5">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Provider Registration
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                    Offer your services and grow your business
                  </p>
                </div>
                <ProviderRegisterForm />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Login redirect */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 underline underline-offset-2 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
