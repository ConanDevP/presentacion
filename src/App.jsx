import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChartBarIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon,
  ChatBubbleBottomCenterTextIcon, CogIcon, BoltIcon, ArrowPathIcon,
  CalendarIcon, CreditCardIcon, FingerPrintIcon, ChartPieIcon,
  BuildingOfficeIcon, BanknotesIcon, ShoppingBagIcon, BriefcaseIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

// Componente ParticlesBackground
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

// Componente Slide
const Slide = ({ children, isActive, index }) => {
  const slideVariants = {
    enter: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.05,
    }
  };

  return (
    <motion.div
      className={`min-h-screen p-8 flex flex-col justify-center ${!isActive ? 'hidden' : ''}`}
      variants={slideVariants}
      initial="enter"
      animate={isActive ? "center" : "exit"}
      exit="exit"
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Componente StatCard
const StatCard = ({ prefix = '', value, suffix = '', text, description }) => (
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
    {description && (
      <p className="text-gray-400">{description}</p>
    )}
  </motion.div>
);

// Componente FeatureCard
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

// Componente TimelineItem
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

// Componente Quote
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

// Componente Principal App
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  // Efecto para manejar el scroll
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

    return () => {
      window.removeEventListener('wheel', handleWheel, wheelOptions);
    };
  }, [currentSlide]);

  // Efecto para manejar la navegación con teclado
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

      {/* Indicador de scroll */}
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

      {/* Navigation Dots */}
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
              Contact Center Inteligente
            </h1>
            <h2 className="text-4xl mb-8 text-blue-400">
              HYDIB: Inteligencia que Conecta, Experiencias que Transforman
            </h2>
            <Quote
              text="En HYDIB, entendemos que el futuro de las relaciones con los clientes no solo se trata de cumplir expectativas, sino de superarlas con tecnología inteligente."
              className="max-w-3xl mx-auto"
            />
          </motion.div>
        </Slide>

        {/* Slide 2: El Contexto */}
        <Slide isActive={currentSlide === 1}>
          <h2 className="text-4xl mb-8 font-bold text-center">El Panorama Actual</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <StatCard
              value={67}
              suffix="%"
              text="Prefieren autoservicio"
              description="Los clientes buscan soluciones rápidas y accesibles"
            />
            <StatCard
              value={45}
              suffix="%"
              text="Múltiples contactos"
              description="Interacciones que requieren seguimiento adicional"
            />
            <StatCard
              value={78}
              suffix="%"
              text="Exigen disponibilidad 24/7"
              description="Presión constante sobre las operaciones"
            />
          </div>
          <Quote
            text="El panorama actual plantea un desafío crítico: los clientes quieren soluciones rápidas, personalizadas y siempre disponibles."
          />
        </Slide>

        {/* Slide 3: El Desafío */}
        <Slide isActive={currentSlide === 2}>
          <h2 className="text-4xl mb-12 font-bold">¿Qué Enfrentan las Empresas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={CurrencyDollarIcon}
              title="Costos operativos crecientes"
              description="Las empresas invierten recursos significativos en mantener servicios que no alcanzan la eficiencia deseada"
            />
            <FeatureCard
              Icon={ChartBarIcon}
              title="Expectativas elevadas"
              description="Los clientes modernos demandan respuestas inmediatas y experiencias altamente personalizadas"
            />
            <FeatureCard
              Icon={ClockIcon}
              title="Eficiencia transaccional"
              description="Necesidad de maximizar resultados en cada interacción minimizando recursos y tiempo invertido"
            />
            <FeatureCard
              Icon={ShieldCheckIcon}
              title="Complejidad en integraciones"
              description="Sistemas desconectados que generan fricciones y ralentizan los procesos operativos"
            />
          </div>
        </Slide>

        {/* Slide 4: Nuestra Solución */}
        <Slide isActive={currentSlide === 3}>
          <h2 className="text-4xl mb-8 font-bold text-center">Contact Center Inteligente</h2>
          <Quote
            text="El Contact Center Inteligente de HYDIB no es solo un sistema; es un ecosistema diseñado para transformar cada interacción en una experiencia positiva."
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={ChatBubbleBottomCenterTextIcon}
              title="IA Conversacional"
              description="Sistema avanzado de respuestas automáticas que mantiene conversaciones naturales y contextuales"
            />
            <FeatureCard
              Icon={CogIcon}
              title="Motor Transaccional"
              description="Procesamiento eficiente que permite completar operaciones complejas en una sola interacción"
            />
            <FeatureCard
              Icon={BoltIcon}
              title="Automatización Inteligente"
              description="Sistema que aprende y optimiza procesos repetitivos, liberando recursos para tareas de mayor valor"
            />
            <FeatureCard
              Icon={ArrowPathIcon}
              title="Integración Empresarial"
              description="Conexión fluida con sistemas internos y externos para una operación sin interrupciones"
            />
          </div>
        </Slide>

        {/* Slide 5: Capacidades Clave */}
        <Slide isActive={currentSlide === 4}>
          <h2 className="text-4xl mb-12 font-bold text-center">Funcionalidades Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={CalendarIcon}
              title="Gestión de Citas y Reservas"
              description="Sistema inteligente de programación que optimiza tiempos y recursos automáticamente"
            />
            <FeatureCard
              Icon={CreditCardIcon}
              title="Procesamiento de Pagos"
              description="Transacciones seguras y verificadas con múltiples métodos de pago integrados"
            />
            <FeatureCard
              Icon={FingerPrintIcon}
              title="Autenticación Biométrica"
              description="Verificación de identidad multinivel para máxima seguridad en cada interacción"
            />
            <FeatureCard
              Icon={ChartPieIcon}
              title="Analítica Predictiva"
              description="Algoritmos avanzados que anticipan necesidades y optimizan decisiones operativas"
            />
          </div>
        </Slide>

        {/* Slide 6: Beneficios Tangibles */}
        <Slide isActive={currentSlide === 5}>
          <h2 className="text-4xl mb-8 font-bold text-center">Resultados Esperados</h2>
          <Quote
            text="Los resultados hablan por sí solos: HYDIB no solo transforma la experiencia del cliente, sino que redefine la rentabilidad operativa."
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StatCard
              value="40-60"
              suffix="%"
              text="Optimización operativa"
              description="Reducción significativa en costos operativos y mejora en productividad"
            />
            <StatCard
              value={35}
              suffix="%"
              text="Mejora en satisfacción"
              description="Incremento medible en la satisfacción general del cliente"
            />
            <StatCard
              prefix="Disponibilidad "
              value={24}
              suffix="/7"
              text="Servicio continuo"
              description="Atención ininterrumpida para clientes globales"
            />
            <StatCard
              value={100}
              suffix="%"
              text="Escalabilidad"
              description="Capacidad de crecimiento según demanda sin pérdida de calidad"
            />
          </div>
        </Slide>

        {/* Slide 7: Casos de Uso */}
        <Slide isActive={currentSlide === 6}>
          <h2 className="text-4xl mb-8 font-bold text-center">Aplicaciones Prácticas</h2>
          <Quote
            text="Desde la atención médica hasta las finanzas, HYDIB está transformando industrias enteras con soluciones personalizadas."
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={BuildingOfficeIcon}
              title="Sector Salud"
              description="Gestión eficiente de citas médicas, seguimiento de pacientes y atención primaria automatizada"
            />
            <FeatureCard
              Icon={BanknotesIcon}
              title="Servicios Financieros"
              description="Procesamiento seguro de transacciones y atención personalizada para clientes premium"
            />
            <FeatureCard
              Icon={ShoppingBagIcon}
              title="Comercio Minorista"
              description="Soporte en tiempo real para ventas y servicio post-venta automatizado"
            />
            <FeatureCard
              Icon={BriefcaseIcon}
              title="Servicios Profesionales"
              description="Automatización de procesos administrativos y mejora en la comunicación cliente-empresa"
            />
          </div>
        </Slide>

        {/* Slide 8: Roadmap */}
        <Slide isActive={currentSlide === 7}>
          <h2 className="text-4xl mb-12 font-bold text-center">Evolución del Sistema</h2>
          <div className="space-y-8">
            <TimelineItem
              date="Q4 2024"
              title="Lanzamiento del sistema central"
              description="Implementación de funcionalidades base y establecimiento de infraestructura core"
              index={0}
            />
            <TimelineItem
              date="Q2 2025"
              title="Expansión funcional"
              description="Incorporación de nuevas capacidades y optimización basada en feedback inicial"
              index={1}
            />
            <TimelineItem
              date="Q4 2025"
              title="Adaptación sectorial"
              description="Desarrollo de soluciones específicas para diferentes industrias y casos de uso"
              index={2}
            />
            <TimelineItem
              date="2026+"
              title="Innovación continua"
              description="Evolución constante con nuevas tecnologías y capacidades avanzadas"
              index={3}
            />
          </div>
        </Slide>

        {/* Slide 9: Seguridad */}
        <Slide isActive={currentSlide === 8}>
          <h2 className="text-4xl mb-8 font-bold text-center">Confiabilidad y Seguridad</h2>
          <Quote
            text="La seguridad es el núcleo de HYDIB, protegiendo tanto los datos como la confianza de nuestros clientes."
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={ShieldCheckIcon}
              title="Certificación PCI DSS"
              description="Cumplimiento completo con estándares internacionales de seguridad en transacciones financieras"
            />
            <FeatureCard
              Icon={ShieldCheckIcon}
              title="Cumplimiento GDPR"
              description="Protección integral de datos personales según normativas globales de privacidad"
            />
            <FeatureCard
              Icon={ShieldCheckIcon}
              title="Encriptación end-to-end"
              description="Seguridad de nivel militar en todas las comunicaciones y almacenamiento de datos"
            />
            <FeatureCard
              Icon={ShieldCheckIcon}
              title="Auditorías continuas"
              description="Evaluación regular de seguridad por expertos independientes"
            />
          </div>
        </Slide>

        {/* Slide 10: Próximos Pasos */}
        <Slide isActive={currentSlide === 9}>
          <h2 className="text-4xl mb-8 font-bold text-center">El Camino a Seguir</h2>
          <Quote
            text="Con HYDIB, dar el siguiente paso hacia la transformación nunca ha sido tan claro y alcanzable."
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={ChartBarIcon}
              title="Evaluación de necesidades"
              description="Análisis exhaustivo de procesos actuales y áreas de oportunidad para maximizar el impacto"
            />
            <FeatureCard
              Icon={BoltIcon}
              title="Prueba piloto"
              description="Implementación controlada con métricas claras para validar beneficios y ajustar la solución"
            />
            <FeatureCard
              Icon={ArrowPathIcon}
              title="Implementación por fases"
              description="Despliegue estratégico que minimiza riesgos y asegura una transición suave"
            />
            <FeatureCard
              Icon={ChartPieIcon}
              title="Escalamiento"
              description="Expansión progresiva de capacidades alineada con objetivos de crecimiento"
            />
          </div>
        </Slide>

      
      </AnimatePresence>
    </div>
  );
}

export default App;