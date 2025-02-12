import Hero from "@/components/home/Hero";
import NotFeelingYourself from "@/components/home/NotFeelingYourself";
import OurTreatments from "@/components/home/OurTreatments";
import GotBlood from "@/components/home/GotBlood";
import TreatmentProcess from "@/components/home/TreatmentProcess";
import TalkToUs from "@/components/home/TalkToUs";
import HealthJourneys from "@/components/home/HealthJourneys";
import OurValues from "@/components/home/OurValues";
import FAQs from "@/components/home/FAQs";
import CustomerReviews from "@/components/home/CustomerReviews";
import SocialMedia from "@/components/home/SocialMedia";

export default function Home() {
  return (
    <main>
      <Hero />
      <NotFeelingYourself />
      <OurTreatments />
      <GotBlood />
      <TreatmentProcess />
      <TalkToUs />
      <HealthJourneys />
      <OurValues />
      <FAQs />
      <CustomerReviews />
      <SocialMedia />
    </main>
  );
}
