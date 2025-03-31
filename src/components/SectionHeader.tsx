
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = false 
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
