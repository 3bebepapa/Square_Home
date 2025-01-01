import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-gray-500">
      <div className="flex justify-center space-x-4">
        <Link href="/terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/support">Support</Link>
      </div>
      <p className="mt-2">© 2023 Square AIWorks. All rights reserved.</p>
    </footer>
  )
}

