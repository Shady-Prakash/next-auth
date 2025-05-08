"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react"
import { useSession } from "next-auth/react"

import { SettingsSchema } from "@/schemas";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { settings } from "@/actions/settings"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SettingsPage = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: ""
    }
  })

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.success) {
            update();
            setSuccess(data.success);
          }

          if (data.error) {
            setError(data.error);
          }
        })
          .catch(() => setError("Something went wrong!"));
    })
  }
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          Settings
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-6"
            onClick={form.handleSubmit(onSubmit)}
          >
             <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="John Doe"
                      type="name"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default SettingsPage