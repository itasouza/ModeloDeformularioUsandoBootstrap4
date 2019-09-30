using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppModelo.Models
{
    public class Modelo
    {
        public int Id { get; set; }
        public string PrimeiroNome { get; set; }
        public string UltimoNome { get; set; }
        public string NomeUsuario { get; set; }
        public DateTime? DataNascimento { get; set; }
        public string CpfUsuario { get; set; }
        public string CnpjEmpresa { get; set; }
        public Pais Pais { get; set; }
        public Capital Capital { get; set; }
        public Continente Continente { get; set; }
        public Atividade Atividade { get; set; }
        public Produto Produto { get; set; }
        public string Email { get; set; }
        public string Endereco { get; set; }
        public string Complemento { get; set; }
        public string Telefone { get; set; }
        public float ValorContrato { get; set; }
        public string Texto { get; set; }
        public char ativo { get; set; }
    }
}
