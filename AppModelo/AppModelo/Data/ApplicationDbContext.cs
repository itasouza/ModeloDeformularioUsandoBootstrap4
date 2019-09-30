using AppModelo.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppModelo.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<Atividade> TB_ATIVIDADE { get; set; }
        public DbSet<Capital> TB_CAPITAL { get; set; }
        public DbSet<Produto> TB_PRODUTO { get; set; }
        public DbSet<Pais> TB_PAIS { get; set; }
        public DbSet<Continente> TB_CONTINENTE { get; set; }
        public DbSet<Modelo> TB_MODELO { get; set; }


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}
