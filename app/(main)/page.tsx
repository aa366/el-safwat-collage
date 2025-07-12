import Banner from "./private-component/banner"
import Description from "./private-component/description"
import Goals from "./private-component/goals"
import Programs from "./private-component/programs"
import Requirements from "./private-component/admissionREQ"
import WhyStudy from "./private-component/whyStudy"

export default function Home() {
  return(
    <main className="flex flex-col gap-[10vh]">
        <Banner />
        <Description />
        <Goals />
        <Programs />
        <Requirements />
        <WhyStudy />
        
    </main>
  )
}
