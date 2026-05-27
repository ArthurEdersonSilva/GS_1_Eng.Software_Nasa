export interface SensorModulo {
  id?: number;
  nome: string;
  tipo: string;
  status: string;
  ultimaLeitura: number;
}

export interface SistemaEvento {
  id?: number;
  timestamp?: string;
  sistemaAfetado: string;
  descricao: string;
}

export interface AlertaCritico {
  id?: number;
  mensagem: string;
  nivelSeveridade: 'CRITICAL' | 'WARNING';
  resolvido: boolean;
  timestamp?: string;
}