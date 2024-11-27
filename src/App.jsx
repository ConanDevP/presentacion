import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChartBarIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon,
  ChatBubbleBottomCenterTextIcon, CogIcon, BoltIcon, ArrowPathIcon,
  CalendarIcon, CreditCardIcon, FingerPrintIcon, ChartPieIcon,
  BuildingOfficeIcon, BanknotesIcon, ShoppingBagIcon, BriefcaseIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              x: ['0%', `${Math.random() * 100}%`],
              y: ['0%', `${Math.random() * 100}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Slide = ({ children, isActive, index }) => {
  const slideVariants = {
    enter: { opacity: 0, y: 50, scale: 0.95 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 1.05 }
  };

  return (
    <motion.div
      className={`min-h-screen p-8 flex flex-col justify-center ${!isActive ? 'hidden' : ''}`}
      variants={slideVariants}
      initial="enter"
      animate={isActive ? "center" : "exit"}
      exit="exit"
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

const StatCard = ({ prefix = '', value, suffix = '', text, description, source = '' }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-blue-500/20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
      {prefix}{value}{suffix}
    </div>
    <h3 className="text-xl font-semibold mb-2">{text}</h3>
    {description && <p className="text-gray-400">{description}</p>}
    {source && <p className="text-sm text-gray-500 mt-2 italic">{source}</p>}
  </motion.div>
);

const FeatureCard = ({ Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-blue-500/20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="h-12 w-12 text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const TimelineItem = ({ date, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="flex gap-4"
  >
    <div className="w-24 font-bold text-blue-400">{date}</div>
    <div className="flex-1 bg-gray-800/50 backdrop-blur-lg p-4 rounded-xl border border-blue-500/20">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const Quote = ({ text, className = '' }) => (
  <motion.blockquote
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`text-xl text-gray-400 italic my-8 ${className}`}
  >
    "{text}"
  </motion.blockquote>
);

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    const wheelOptions = { passive: false };
    window.addEventListener('wheel', handleWheel, wheelOptions);
    return () => window.removeEventListener('wheel', handleWheel, wheelOptions);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' && currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <ParticlesBackground />

      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSlide === 0 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center">
          <ChevronDownIcon className="h-6 w-6 text-white animate-bounce" />
          <span className="text-sm text-gray-400">Scroll para continuar</span>
        </div>
      </motion.div>

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="space-y-2">
          {[...Array(totalSlides)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.5 }}
              className={`w-2 h-2 ${currentSlide === i ? 'bg-blue-400' : 'bg-gray-400'} rounded-full cursor-pointer`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Slide 1: Apertura */}
        <Slide isActive={currentSlide === 0}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl mb-6 font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Amahe: Contact Center Inteligente
            </h1>
            <h2 className="text-4xl mb-8 text-blue-400">
              Transformando la Gestión de Llamadas en una Experiencia Integral
            </h2>
            <Quote
              text="La revolución en la atención al cliente comienza aquí. Amahe transforma cada interacción en una oportunidad para sorprender y fidelizar."
              className="max-w-3xl mx-auto"
            />
          </motion.div>
        </Slide>

        {/* Slide 2: El Panorama Actual */}
        <Slide isActive={currentSlide === 1}>
          <h2 className="text-4xl mb-8 font-bold text-center">El Contexto Actual</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <StatCard
              value={67}
              suffix="%"
              text="Prefieren autoservicio"
              description="Los clientes buscan resolver sus consultas de forma autónoma y eficiente"
              source="Fuente: Gartner, 2023"
            />
            <StatCard
              value={45}
              suffix="%"
              text="Múltiples contactos"
              description="Las consultas requieren seguimiento y resolución en varios pasos"
              source="Fuente: Forrester Research"
            />
            <StatCard
              value={78}
              suffix="%"
              text="Exigen atención 24/7"
              description="La disponibilidad continua es una expectativa básica"
              source="Fuente: McKinsey & Company"
            />
          </div>
          <Quote
            text="El mercado demanda una revolución en la forma de gestionar la atención al cliente"
          />
        </Slide>

        {/* Slide 3: El Desafío */}
        <Slide isActive={currentSlide === 2}>
          <h2 className="text-4xl mb-12 font-bold">¿Qué Enfrentan las Empresas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={CurrencyDollarIcon}
              title="Costos operativos elevados"
              description="La gestión tradicional requiere grandes inversiones en personal y tecnología sin garantizar resultados óptimos"
            />
            <FeatureCard
              Icon={ChartBarIcon}
              title="Dificultad de integración"
              description="Sistemas aislados que complican la visión unificada del cliente y su historial"
            />
            <FeatureCard
              Icon={ClockIcon}
              title="Falta de automatización"
              description="Procesos manuales que consumen tiempo y recursos valiosos del equipo"
            />
            <FeatureCard
              Icon={ShieldCheckIcon}
              title="Disponibilidad limitada"
              description="Imposibilidad de ofrecer servicio continuo sin multiplicar costos"
            />
          </div>
        </Slide>

        {/* Slide 4: Nuestra Solución */}
        <Slide isActive={currentSlide === 3}>
          <h2 className="text-4xl mb-8 font-bold text-center">Amahe: Contact Center del Futuro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl">
              <h3 className="text-2xl mb-4 font-bold">Estado Actual:</h3>
              <ul className="space-y-2">
                <li>• Bot avanzado con capacidad de gestión de llamadas en tiempo real</li>
                <li>• Integración completa con sistemas empresariales existentes</li>
                <li>• Análisis predictivo de patrones de llamadas</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl">
              <h3 className="text-2xl mb-4 font-bold">Visión Futura:</h3>
              <ul className="space-y-2">
                <li>• Plataforma SaaS totalmente escalable</li>
                <li>• Sistema omnicanal integrado</li>
                <li>• IA avanzada para personalización total</li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Slide 5: Capacidades Clave */}
        <Slide isActive={currentSlide === 4}>
          <h2 className="text-4xl mb-12 font-bold text-center">Funcionalidades Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={CalendarIcon}
              title="Gestión Automatizada"
              description="Sistema inteligente que maneja llamadas y prioriza casos automáticamente"
            />
            <FeatureCard
              Icon={CreditCardIcon}
              title="Integración Enterprise"
              description="Conexión perfecta con CRM, ERP y sistemas existentes"
            />
            <FeatureCard
              Icon={FingerPrintIcon}
              title="Personalización Dinámica"
              description="Adaptación del servicio según el perfil e historial del cliente"
            />
            <FeatureCard
              Icon={ChartPieIcon}
              title="Escalabilidad Total"
              description="Crece con tu negocio sin comprometer la calidad"
            />
          </div>
        </Slide>

        {/* Slide 6: Beneficios Tangibles */}
        <Slide isActive={currentSlide === 5}>
          <h2 className="text-4xl mb-8 font-bold text-center">Resultados Tangibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StatCard
              value={50}
              suffix="%"
              text="Reducción de costos"
              description="Optimización significativa en gastos operativos"
            />
            <StatCard
              value={80}
              suffix="%"
              text="Automatización"
              description="Resolución automática de consultas rutinarias"
            />
            <StatCard
              value={35}
              suffix="%"
              text="Mejora en satisfacción"
              description="Incremento medible en experiencia del cliente"
            />
            <StatCard
              text="Preparación SaaS"
              description="Transición fluida hacia modelo cloud"
            />
          </div>
        </Slide>

        {/* Slide 7: Casos de Uso */}
        <Slide isActive={currentSlide === 6}>
          <h2 className="text-4xl mb-8 font-bold text-center">Aplicaciones Prácticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={BuildingOfficeIcon}
              title="Sector Salud"
              description="Gestión inteligente de citas y seguimiento personalizado de pacientes"
            />
            <FeatureCard
              Icon={BanknotesIcon}
              title="Servicios Financieros"
              description="Verificación segura y gestión automatizada de transacciones"
            />
            <FeatureCard
              Icon={ShoppingBagIcon}
              title="Retail"
              description="Soporte integral para ventas y servicio post-venta"
            />
            <FeatureCard
              Icon={BriefcaseIcon}
              title="Servicios Profesionales"
              description="Automatización eficiente de procesos administrativos"
            />
          </div>
        </Slide>

        {/* Slide 8: Roadmap */}
        <Slide isActive={currentSlide === 7}>
          <h2 className="text-4xl mb-12 font-bold text-center">Evolución del Sistema</h2>
          <div className="space-y-8">
            <TimelineItem
              date="Fase Actual"
              title="Bot Avanzado"
              description="Sistema core con integraciones CRM/ERP implementadas"
              index={0}
            />
            <TimelineItem
              date="Q2 2025"
              title="SaaS Avanzado"
              description="Lanzamiento de plataforma cloud con análisis predictivo"
              index={1}
            />
            <TimelineItem
              date="Q4 2025"
              title="Expansión Multicanal"
              description="Integración completa de canales digitales adicionales"
              index={2}
            />
            <TimelineItem
              date="2026+"
              title="SaaS Completo"
              description="Solución integral multicanal con IA avanzada"
              index={3}
            />
          </div>
        </Slide>

        {/* Slide 9: Seguridad */}
        <Slide isActive={currentSlide === 8}>
          <h2 className="text-4xl mb-8 font-bold text-center">Seguridad y Confiabilidad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              Icon={ShieldCheckIcon}
              title="Protección Robusta"
              description="Encriptación end-to-end en todas las comunicaciones"
            />
            <FeatureCard
              Icon={ShieldCheckIcon}
              title="Estándares Globales"
              description="Cumplimiento GDPR y PCI DSS garantizado"
            />
            <FeatureCard
              Icon={ShieldCheckIcon}
              title="Monitoreo Continuo"
              description="Auditorías regulares de seguridad y rendimiento"
            />
          </div>
        </Slide>

        {/* Slide 10: Próximos Pasos */}
        <Slide isActive={currentSlide === 9}>
          <h2 className="text-4xl mb-8 font-bold text-center">Inicia la Transformación</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              Icon={ChartBarIcon}
              title="Implementación Bot"
              description="Integración inicial del sistema en tu operación actual"
            />
            <FeatureCard
              Icon={BoltIcon}
              title="Prueba Piloto"
              description="Validación en entorno controlado con métricas claras"
            />
            <FeatureCard
              Icon={ArrowPathIcon}
              title="Escalamiento SaaS"
              description="Transición gradual hacia la plataforma completa"
            />
          </div>
        </Slide>
      </AnimatePresence>
    </div>
  );
}

export default App;