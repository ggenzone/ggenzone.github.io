import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

export default function ValorFuturo() {
  const [capital, setCapital] = useState(1000);
  const [tasa, setTasa] = useState(5);
  const [anios, setAnios] = useState(10);
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const tasaDecimal = tasa / 100;
    const valorFuturo = capital * Math.pow(1 + tasaDecimal, anios);
    setResultado(valorFuturo.toFixed(2));
  };

  return (
    <div className="p-4 border rounded w-full">
      <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Calculadora de Valor Futuro</h3>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="capital_inicial">Capital inicial:</Label>
        <Input type="number" id="capital_inicial" value={capital} onChange={(e) => setCapital(+e.target.value)} placeholder="Capital inicial" />
        <Label htmlFor="tasa">Tasa anual (%):</Label>
        <Input type="number" id="tasa" value={tasa} onChange={(e) => setTasa(+e.target.value)} placeholder="Tasa anual (%)" />
        <Label htmlFor="year">Años:</Label>
        <Input type="number" id="year" value={anios} onChange={(e) => setAnios(+e.target.value)} placeholder="Años" />
      </div>

      <br />
      <Button onClick={calcular}>Calcular</Button>

      {resultado && (
        <p>Valor Futuro: <strong>${resultado}</strong></p>
      )}
    </div>
  );
}