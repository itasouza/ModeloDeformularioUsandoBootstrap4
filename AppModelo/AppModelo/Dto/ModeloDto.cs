using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppModelo.Dto
{
    public class ModeloDto
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "obrigatório")]
        public string PrimeiroNome { get; set; }

        public string UltimoNome { get; set; }


        public string NomeUsuario { get; set; }


        public DateTime? DataNascimento { get; set; }


        public string CpfUsuario { get; set; }


        public string CnpjEmpresa { get; set; }


        public int PaisID { get; set; }

        public int CapitalID { get; set; }


        public int ContinenteID { get; set; }


        public int AtividadeID { get; set; }


        public int ProdutoID { get; set; }


        public string Email { get; set; }


        public string Endereco { get; set; }


        public string Complemento { get; set; }


        public string Telefone { get; set; }


        public float ValorContrato { get; set; }


        public string Texto { get; set; }
    }
}
