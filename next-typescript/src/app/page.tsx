import Footer from '@/app/components/Footer'
import Form from '@/app/components/Form'
import Header from '@/app/components/Header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Form />
      <Footer />
    </div>
  )
}
