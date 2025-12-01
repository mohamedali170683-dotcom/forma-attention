import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl">Assessment Not Found</CardTitle>
          <CardDescription>
            We couldn't find the assessment results you're looking for.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            This could be because:
          </p>
          <ul className="text-sm text-gray-600 text-left space-y-2">
            <li>• The assessment ID is incorrect</li>
            <li>• The assessment has been deleted</li>
            <li>• The link has expired</li>
          </ul>
          <div className="pt-4">
            <Link href="/forma/assessment">
              <Button className="w-full">Take New Assessment</Button>
            </Link>
          </div>
          <Link href="/forma">
            <Button variant="outline" className="w-full">
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
