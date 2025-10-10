"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "../../ui/label";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/dashboard/users");
    } else {
      alert("Error creating user");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Label htmlFor="name">Username</Label>
            <Input
              type="text"
              placeholder="Username"
              className="border p-2 w-full mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Password"
              className="border p-2 w-full mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Signup
            </Button>
            <Link href="/dashboard/users">
              <Button className="bg-red-600 text-white px-4 py-2 rounded mx-2">
                Cancel
              </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
