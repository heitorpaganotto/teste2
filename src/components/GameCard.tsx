import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

export const GameCard = ({ title, description, image, className, style }: GameCardProps) => {
  return (
    <Card className={`bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group ${className}`} style={style}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="gaming" size="sm" className="w-full">
          Jogar Agora
        </Button>
      </div>
    </Card>
  );
};