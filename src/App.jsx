import React from 'react';
import Slide from './components/Slide';
import StatCard from './components/StatCard';
import FeatureCard from './components/FeatureCard';
import TimelineItem from './components/TimelineItem';
import { 
  ChartBarIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon,
  ChatBubbleBottomCenterTextIcon, CogIcon, BoltIcon, ArrowPathIcon,
  CalendarIcon, CreditCardIcon, FingerPrintIcon, ChartPieIcon,
  BuildingOfficeIcon, BanknotesIcon, ShoppingBagIcon, BriefcaseIcon
} from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Slide 1: Apertura */}
      <Slide className="text-center">
        <h1 className="text-6xl mb-4 font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Contact Center Inteligente
        </h1>
        <h2 className="text-4xl text-blue-400">
          HYDIB: Inteligencia que Conecta, Experiencias que Transforman
        </h2>
      </Slide>

      {/* Slide 2: El Contexto */}
      <Slide>
        <h2 className="text-4xl mb-12 font-bold text-center">El Contexto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard value={67} suffix="%" text="Prefieren autoservicio" />
          <StatCard value={45} suffix="%" text="Requieren múltiples contactos" />
          <StatCard value={78} suffix="%" text="Exigen disponibilidad 24/7" />
        </div>
      </Slide>

      {/* Slide 3: El Desafío */}
      <Slide>
        <h2 className="text-4xl mb-12 font-bold">¿Qué Enfrentan las Empresas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard Icon={CurrencyDollarIcon} title="Costos operativos crecientes" description="Las empresas gastan más en mantener servicios ineficientes" />
          <FeatureCard Icon={ChartBarIcon} title="Expectativas elevadas" description="Los clientes esperan respuestas inmediatas y personalizadas" />
          <FeatureCard Icon={ClockIcon} title="Eficiencia transaccional" description="Cada interacción debe maximizar resultados con mínimo esfuerzo" />
          <FeatureCard Icon={ShieldCheckIcon} title="Complejidad en integraciones" description="La falta de conexión entre sistemas ralentiza las operaciones" />
        </div>
      </Slide>

      {/* Slide 4: Nuestra Solución */}
      <Slide>
        <h2 className="text-4xl mb-12 font-bold text-center">Contact Center Inteligente</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard Icon={ChatBubbleBottomCenterTextIcon} title="IA Conversacional" description="Respuestas automáticas y naturales" />
          <FeatureCard Icon={CogIcon} title="Motor Transaccional" description="Procesos fluidos en una sola interacción" />
          <FeatureCard Icon={BoltIcon} title="Automatización Inteligente" description="Optimización de tareas repetitivas" />
          <FeatureCard Icon={ArrowPathIcon} title="Integración Empresarial" description="Conexión sin fisuras con sistemas" />
        </div>
      </Slide>

      {/* Slide 5: Capacidades Clave */}
      <Slide>
        <h2 className="text-4xl mb-12 font-bold text-center">Funcionalidades Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard Icon={CalendarIcon} title="Gestión de Citas y Reservas" description="Flujo organizado y sin fricciones" />
          <FeatureCard Icon={CreditCardIcon} title="Procesamiento de Pagos" description="Rápido, seguro y confiable" />
          <FeatureCard Icon={FingerPrintIcon} title="Autenticación Biométrica" description="Garantía de identidad en cada interacción" />
          <FeatureCard Icon={ChartPieIcon} title="Analítica Predictiva" description="Anticipa necesidades y mejora decisiones" />
        </div>
      </Slide>

      {/* Slide 6: Beneficios Tangibles */}
      <Slide>
        <h2 className="text-4xl mb-12 font-bold text-center">Resultados Esperados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StatCard value={40} suffix="%" text="Optimización operativa" />
          <StatCard value={35} suffix="%" text="Mejora en satisfacción" />
          <StatCard value={24} suffix="/7" prefix="Disponibilidad " text="Respuesta ininterrumpida" />
          <StatCard value={100} suffix="%" text="Escalabilidad inmediata" />
        </div>
      </Slide>

      {/* Slide 7: Casos de Uso */}
      <Slide>
        <h2 className="text-4xl mb-12 font-bold text-center">Aplicaciones Prácticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard Icon={BuildingOfficeIcon} title="Salud" description="Gestión de citas y atención inmediata" />
          <FeatureCard Icon={BanknotesIcon} title="Servicios Financieros" description="Procesos seguros y rápidos" />
          <FeatureCard Icon={ShoppingBagIcon} title="Comercio Minorista" description="Asistencia al cliente en tiempo real" />
          <FeatureCard Icon={BriefcaseIcon} title="Servicios Profesionales" description="Automatización de flujos" />
        </div>
      </Slide>

      {/* Slide 8: Roadmap */}
      <Slide>
        <h2 className="text-4xl mb-12 font-bold text-center">Evolución del Sistema</h2>
        <div className="space-y-8">
          <TimelineItem 
            date="Q4 2024"
            title="Lanzamiento del sistema central"
            description="Implementación de funcionalidades base"
          />
          <TimelineItem 
            date="Q2 2025"
            title="Expansión funcional"
            description="Nuevas capacidades y mejoras"
          />
          <TimelineItem 
            date="Q4 2025"
            title="Adaptación sectorial"
            description="Expansión a nuevas industrias"
          />
          <TimelineItem 
            date="2026+"
            title="Innovación continua"
            description="Evolución constante del sistema"
          />
        </div>
      </Slide>

      {/* Slide 9: Seguridad */}
      <Slide>
        <h2 className="text-4xl mb-12 font-bold text-center">Confiabilidad y Seguridad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard 
            Icon={ShieldCheckIcon}
            title="Certificación PCI DSS"
            description="Máxima seguridad en transacciones financieras"
          />
          <FeatureCard 
            Icon={ShieldCheckIcon}
            title="Cumplimiento GDPR"
            description="Protección integral de datos personales"
          />
          <FeatureCard 
            Icon={ShieldCheckIcon}
            title="Encriptación end-to-end"
            description="Comunicación segura garantizada"
          />
          <FeatureCard 
            Icon={ShieldCheckIcon}
            title="Auditorías continuas"
            description="Mantenimiento de altos estándares"
          />
        </div>
      </Slide>

      {/* Slide 10: Próximos Pasos */}
      <Slide>
        <h2 className="text-4xl mb-12 font-bold text-center">El Camino a Seguir</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard 
            Icon={ChartBarIcon}
            title="Evaluación de necesidades"
            description="Diagnóstico inicial de operaciones"
          />
          <FeatureCard 
            Icon={BoltIcon}
            title="Prueba piloto"
            description="Validación práctica con resultados medibles"
          />
          <FeatureCard 
            Icon={ArrowPathIcon}
            title="Implementación por fases"
            description="Adaptación gradual al negocio"
          />
          <FeatureCard 
            Icon={ChartPieIcon}
            title="Escalamiento"
            description="Crecimiento alineado con objetivos"
          />
        </div>
      </Slide>
    </div>
  );
}

export default App;