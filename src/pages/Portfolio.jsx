import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@mui/material';
import AboutHeader from '../components/AboutHeader';
import CardImg1 from '../assets/CardimgAbout1.png'
import CardImg2 from '../assets/CardimgAbout2.png'
import CardImg3 from '../assets/CardimgAbout3.png'
import CardImg4 from '../assets/CardimgAbout4.png'


const portfolioItems = [
  { title: "Buddy.Ai", description: "Early learning AI teacher helping kids improve their skills.", imageUrl: "./baddiai.png", link: "https://buddy.ai/en/" },
  { title: "Dabomb Fizzers", description: "Each bath bomb contains a surprise inside for ultimate relaxation.", imageUrl: "./Dabobm.png", link: "https://dabombfizzers.com" },
  { title: "Japanese Dream Tour", description: "A family-run construction company offering quality services.", imageUrl: "./japanesedreamtour.png", link: "https://japanesedreamtour.vercel.app/" },
  { title: "Straw Hat Renovations", description: "Discover the hidden beauty of Hokkaido with expert renovations.", imageUrl: "./StrawHat.png", link: "https://strawhatrenovations.ca/" },
  { title: "DigitalOcean", description: "A platform offering powerful customer experiences through cloud solutions.", imageUrl: "./fooji.png", link: "" },
  { title: "Foodbomb", description: "A seamless food ordering experience without the need for admins.", imageUrl: "./Foodbom.png", link: "" },
  { title: "Earlux", description: "A wide selection of high-quality Bluetooth hearing aids and solutions.", imageUrl: "./earlx.png", link: "" },
  { title: "Rooza", description: "Helping businesses grow with innovative online marketing strategies.", imageUrl: "./rooza.png", link: "" },
  { title: "The Lex", description: "Exclusive law magazine offering the latest updates in legal news.", imageUrl: "./rooza.png", link: "https://thelex.live" },
]


export default function Portfolio() {
  const [visibleItems, setVisibleItems] = useState(6)
  const showAll = visibleItems >= portfolioItems.length

  const handleViewMore = () => {
    setVisibleItems(showAll ? 6 : portfolioItems.length)
  }

  return (
    <>
      <AboutHeader
        title="Portfolio"
        backgroundImage="./image@2x.png" // Use your desired header image
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <header className="py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Explore Our Projects</h1>
        </header>

        <main className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.slice(0, visibleItems).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <a
                      href={item.link} // This links to the project
                      target="_blank" // Open in a new tab
                      rel="noopener noreferrer" // Security for opening links
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Visit Site
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {portfolioItems.length > 6 && (
            <div className="text-center my-12">
              <Button
                onClick={handleViewMore}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300"
              >
                {showAll ? 'Show Less' : 'View More'}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </main>
      </div>
    </>
  )
}
