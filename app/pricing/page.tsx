import { PricingTable } from "@clerk/nextjs"

function PricingPage() {
  return (
    <div>
        <PricingTable newSubscriptionRedirectUrl="/dashboard" />
    </div>
  )
}

export default PricingPage