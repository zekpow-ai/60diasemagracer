import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Award, 
  Heart, 
  Zap,
  Star,
  ArrowRight,
  Timer,
  Target,
  BookOpen,
  PlayCircle
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/TT2pUtP', '_blank');
  };

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Método Científico Comprovado",
      description: "Sistema baseado em estudos científicos que garantem resultados reais em 60 dias"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Cardápios Inteligentes",
      description: "Mais de 100 receitas práticas e saborosas para acelerar seu metabolismo"
    },
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: "Treinos em Casa",
      description: "Exercícios de 20 minutos que você pode fazer em qualquer lugar"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Exclusiva",
      description: "Grupo privado com mais de 5.000 pessoas para te apoiar na jornada"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificado de Conclusão",
      description: "Comprove sua dedicação e conquista ao final dos 60 dias"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Acompanhamento Nutricional",
      description: "Suporte direto com nutricionistas especializados"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      age: 34,
      result: "12kg em 60 dias",
      text: "Nunca pensei que fosse possível! O método realmente funciona e mudou minha vida completamente.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Ana Costa",
      age: 28,
      result: "15kg em 60 dias",
      text: "As receitas são deliciosas e os exercícios são super práticos. Recomendo para todas as minhas amigas!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Carla Mendes",
      age: 42,
      result: "18kg em 60 dias",
      text: "Depois dos 40 achei que seria impossível emagrecer. Este curso provou que eu estava errada!",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Clock className="w-4 h-4" />
              OFERTA RELÂMPAGO - APENAS HOJE!
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Emagreça 15kg</span><br />
              em Apenas <span className="text-indigo-600">60 Dias</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              O único método científico que garante <strong>resultados definitivos</strong><br />
              sem dietas malucas, sem academia e sem passar fome
            </p>

            {/* Timer */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-orange-200">
              <p className="text-orange-600 font-semibold mb-2">⚡ OFERTA EXPIRA EM:</p>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 font-mono">
                {formatTime(timeLeft)}
              </div>
            </div>

            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              QUERO PARTICIPAR AGORA
              <ArrowRight className="w-6 h-6" />
            </button>

            <p className="text-sm text-gray-600 mt-4">
              ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte especializado
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Por Que o <span className="text-blue-600">Desafio 60 Dias</span> Funciona?
            </h2>
            <p className="text-xl text-gray-700">
              Um sistema completo desenvolvido por especialistas que já transformou mais de <strong>10.000 vidas</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Veja os <span className="text-blue-600">Resultados Reais</span>
            </h2>
            <p className="text-xl text-gray-700">
              Mais de 10.000 pessoas já transformaram suas vidas com nosso método
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Receitas saudáveis"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Receitas Deliciosas</h3>
                <p className="text-gray-700">Mais de 100 receitas práticas e saborosas</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Exercícios em casa"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Treinos Eficazes</h3>
                <p className="text-gray-700">20 minutos por dia, no conforto de casa</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Transformação"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Resultados Comprovados</h3>
                <p className="text-gray-700">Transformações reais em apenas 60 dias</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              GARANTIR MINHA VAGA HOJE
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              O Que Dizem Quem Já <span className="text-blue-600">Conquistou o Resultado</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 font-semibold">{testimonial.result}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold inline-block mb-6 animate-pulse">
              🔥 OFERTA ESPECIAL - ÚLTIMAS HORAS!
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Transforme Sua Vida Hoje!
            </h2>

            <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-8">
              <div className="text-center mb-6">
                <p className="text-gray-600 text-lg mb-2">De:</p>
                <p className="text-2xl text-gray-500 line-through">R$ 37,90</p>
                <p className="text-gray-600 text-lg mb-2">Por apenas:</p>
                <p className="text-5xl font-bold text-blue-600 mb-2">R$ 19,90</p>
                <p className="text-orange-600 font-semibold">💥 47% OFF - APENAS HOJE!</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Acesso imediato ao curso completo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Mais de 100 receitas exclusivas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Treinos completos para casa</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Grupo VIP no WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>

              <button
                onClick={handleCTAClick}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                QUERO COMEÇAR AGORA! 🚀
              </button>

              <p className="text-sm text-gray-600 mt-4">
                🔒 Pagamento 100% seguro • ⚡ Acesso imediato
              </p>
            </div>

            <div className="bg-yellow-400 text-yellow-900 p-4 rounded-xl inline-block">
              <p className="font-bold">⚠️ ATENÇÃO: Apenas {Math.floor(Math.random() * 50) + 10} vagas restantes!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Não Deixe Para Amanhã o Que Pode Começar <span className="text-blue-400">HOJE</span>!
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Cada dia que você adia é um dia a menos para conquistar o corpo dos seus sonhos
          </p>
          
          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-2xl font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 animate-pulse"
          >
            SIM, QUERO TRANSFORMAR MINHA VIDA! 💪
            <ArrowRight className="w-7 h-7" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Desafio 60 Dias. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;