import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

/**
 * ORA Developments PEI Website
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 
 * 1. Deploy to Vercel:
 *    - Push this code to GitHub
 *    - Connect the repository to Vercel
 *    - Vercel will auto-detect React and deploy
 * 
 * 2. Connect Porkbun domain (oradevelopmentspei.ca):
 *    Option A - Using A Record:
 *      - Go to Porkbun DNS settings
 *      - Add A record: @ -> 76.76.21.21
 *      - Add CNAME: www -> cname.vercel-dns.com
 * 
 *    Option B - Using CNAME:
 *      - Add CNAME: @ -> cname.vercel-dns.com
 *      - Add CNAME: www -> cname.vercel-dns.com
 * 
 * 3. In Vercel dashboard:
 *    - Go to project settings -> Domains
 *    - Add oradevelopmentspei.ca
 *    - Vercel will provide verification steps
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
