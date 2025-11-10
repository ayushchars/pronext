import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, TrendingUp, DollarSign, BarChart3, Users, Award, ChevronDown, Shield, Clock, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { motion } from "framer-motion"
import NavMenu from '@/components/home/NavMenu';
import Hero from '@/components/home/Hero';
import TrustAndSecurity from '@/components/home/TrustAndSecurity';
import Services from '@/components/home/Services';
import Alert from '@/components/home/Alert';
import Industry from '@/components/home/Industry';
import Community from '@/components/home/Community';
import Income from '@/components/home/Income';
import LifeStyle from '@/components/home/LifeStyle';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import Call from '@/components/home/Call';
import Footer from '@/components/home/Footer';
import { redirectBasedOnRole } from '@/hooks/redirect';

const Index = () => {
    const navigate = useNavigate();
  useEffect(() => {
    redirectBasedOnRole(navigate);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0E1624] text-white">
      <NavMenu />
      <Hero />
      <TrustAndSecurity />
      <Services />
      <Alert />
      <Industry />
      <Community />
      <Income />
      <LifeStyle />
      <Testimonials />
      <FAQ />
      <Contact />
      <Call />
      <Footer />

    </div>
  );
};

export default Index;