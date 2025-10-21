import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [area, setArea] = useState([50]);
  const [rooms, setRooms] = useState([2]);
  const [serviceType, setServiceType] = useState('painting');
  
  const calculatePrice = () => {
    const basePrice = serviceType === 'painting' ? 500 : 800;
    return (area[0] * basePrice * rooms[0]).toLocaleString('ru-RU');
  };

  const services = [
    {
      icon: 'Paintbrush',
      title: 'Покраска стен',
      description: 'Качественная покраска любых поверхностей с гарантией результата',
      price: 'от 500₽/м²'
    },
    {
      icon: 'Home',
      title: 'Капитальный ремонт',
      description: 'Полный ремонт квартир и домов под ключ с современными материалами',
      price: 'от 15 000₽/м²'
    },
    {
      icon: 'Hammer',
      title: 'Косметический ремонт',
      description: 'Быстрое обновление интерьера: обои, покраска, мелкий ремонт',
      price: 'от 3 000₽/м²'
    },
    {
      icon: 'Brush',
      title: 'Декоративная отделка',
      description: 'Венецианская штукатурка, фактурная покраска, дизайнерские решения',
      price: 'от 1 200₽/м²'
    },
    {
      icon: 'Wrench',
      title: 'Укладка ламината и паркета',
      description: 'Профессиональная укладка напольных покрытий с выравниванием основания',
      price: 'от 600₽/м²'
    },
    {
      icon: 'Grid3x3',
      title: 'Укладка плитки',
      description: 'Облицовка стен и пола керамической плиткой, мозаикой, керамогранитом',
      price: 'от 800₽/м²'
    },
    {
      icon: 'Wallpaper',
      title: 'Поклейка обоев',
      description: 'Подготовка стен и поклейка обоев любого типа с точной подгонкой рисунка',
      price: 'от 350₽/м²'
    },
    {
      icon: 'Zap',
      title: 'Электромонтажные работы',
      description: 'Монтаж проводки, розеток, выключателей, освещения под ключ',
      price: 'от 2 500₽/точка'
    }
  ];

  const portfolio = [
    {
      before: 'https://cdn.poehali.dev/projects/f08e9eba-1c94-4797-b7d3-6a6f923c364c/files/a39b38dc-006c-4e97-b614-e2e724804a11.jpg',
      after: 'https://cdn.poehali.dev/projects/f08e9eba-1c94-4797-b7d3-6a6f923c364c/files/6c8e4b8c-418a-44d7-8b8d-587b991c942a.jpg',
      title: '2-комнатная квартира',
      area: '65 м²'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-primary">ООО Евро Электро</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a>
              <a href="#calculator" className="hover:text-accent transition-colors">Калькулятор</a>
              <a href="#about" className="hover:text-accent transition-colors">О компании</a>
              <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                asChild
                variant="outline" 
                size="icon"
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={18} />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="icon"
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                <a href="https://wa.me/79001234567" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={18} />
                </a>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="tel:+79001234567">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">Профессиональный ремонт нежилых помещений</h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">Отремонтируем ваш офис быстро и качественно.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                <Icon name="Image" size={20} className="mr-2" />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по ремонту и отделке помещений любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon} size={32} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-accent">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных проектов с фото до и после ремонта
            </p>
          </div>

          {portfolio.map((project, index) => (
            <div key={index} className="max-w-5xl mx-auto mb-12 animate-scale-in">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative group overflow-hidden">
                      <img 
                        src={project.before} 
                        alt="До ремонта" 
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg font-bold">
                        ДО
                      </div>
                    </div>
                    <div className="relative group overflow-hidden">
                      <img 
                        src={project.after} 
                        alt="После ремонта" 
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold">
                        ПОСЛЕ
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="Home" size={16} />
                      Площадь: {project.area}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">Калькулятор стоимости</h2>
              <p className="text-lg text-muted-foreground">
                Рассчитайте примерную стоимость ремонта онлайн
              </p>
            </div>

            <Card className="shadow-2xl border-2 animate-scale-in">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Тип услуги</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant={serviceType === 'painting' ? 'default' : 'outline'}
                        className={serviceType === 'painting' ? 'bg-accent hover:bg-accent/90' : ''}
                        onClick={() => setServiceType('painting')}
                      >
                        <Icon name="Paintbrush" size={20} className="mr-2" />
                        Покраска
                      </Button>
                      <Button
                        variant={serviceType === 'renovation' ? 'default' : 'outline'}
                        className={serviceType === 'renovation' ? 'bg-accent hover:bg-accent/90' : ''}
                        onClick={() => setServiceType('renovation')}
                      >
                        <Icon name="Hammer" size={20} className="mr-2" />
                        Ремонт
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Площадь: <span className="text-accent">{area[0]} м²</span>
                    </Label>
                    <Slider
                      value={area}
                      onValueChange={setArea}
                      min={20}
                      max={200}
                      step={5}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>20 м²</span>
                      <span>200 м²</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Количество комнат: <span className="text-accent">{rooms[0]}</span>
                    </Label>
                    <Slider
                      value={rooms}
                      onValueChange={setRooms}
                      min={1}
                      max={5}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1 комната</span>
                      <span>5+ комнат</span>
                    </div>
                  </div>

                  <div className="bg-accent/10 rounded-xl p-6 border-2 border-accent">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Примерная стоимость</p>
                        <p className="text-4xl font-heading font-bold text-primary">
                          {calculatePrice()} ₽
                        </p>
                      </div>
                      <Icon name="Calculator" size={48} className="text-accent" />
                    </div>
                  </div>

                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Заказать точный расчёт
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-4">О компании</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-slide-in-left">
                <img 
                  src="https://cdn.poehali.dev/projects/f08e9eba-1c94-4797-b7d3-6a6f923c364c/files/714a717b-9f87-40cb-a45a-dd8f3fcfbe0c.jpg" 
                  alt="Наша команда" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-6 animate-slide-in-right">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">18 лет на рынке</h3>
                    <p className="text-white/90">Профессиональная команда с многолетним опытом работы</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">200+ проектов</h3>
                    <p className="text-white/90">Успешно завершённых ремонтов квартир и домов</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">Гарантия 3 года</h3>
                    <p className="text-white/90">На все виды работ с договором и официальными документами</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">Готовы обсудить ваш проект в ближайшее время (возможны задержки из-за количества звонков)</p>
            </div>

            <Card className="shadow-2xl animate-scale-in">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Icon name="Phone" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="text-lg font-semibold text-primary">+7-(926)-390-91-84</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Icon name="Mail" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-lg font-semibold text-primary">korvova@bk.ru</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Icon name="MapPin" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Адрес</p>
                        <p className="text-lg font-semibold text-primary">109316, г. Москва, ул. Талалихина, д. 41, стр. 9, эт/пом/к/о 3/VIII/22/34Г</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" className="mt-1" />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white/80">© 2025 ООО Евро Электро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}