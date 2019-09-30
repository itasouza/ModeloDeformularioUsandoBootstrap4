using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppModelo.Data;
using AppModelo.Dto;
using AppModelo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppModelo.Controllers
{
    public class ModeloController : Controller
    {
        private readonly ApplicationDbContext database;

        public ModeloController(ApplicationDbContext database)
        {
            this.database = database;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {

            var dados = database.TB_MODELO.Include(p => p.Pais).Include(c => c.Capital).Include(c => c.Continente).Include(a => a.Atividade).Include(p => p.Produto).
            Where(cat => cat.ativo == Convert.ToChar("S"));
            return View(await dados.ToListAsync());
        }

        public IActionResult Novo()
        {
            ViewBag.Pais = database.TB_PAIS.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
            ViewBag.Capital = database.TB_CAPITAL.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
            ViewBag.Continente = database.TB_CONTINENTE.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
            ViewBag.Atividade = database.TB_ATIVIDADE.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Salvar(ModeloDto dadosTemporario)
        {
            if (ModelState.IsValid)
            {

                TempData["confirmacao"] = " Registro Cadastrado com Sucesso.";

                Modelo dados = new Modelo();
                dados.PrimeiroNome = dadosTemporario.PrimeiroNome;
                dados.ativo = Convert.ToChar("S");

                database.TB_MODELO.Add(dados);
                database.SaveChanges();
                return RedirectToAction(nameof(Index));
            }
            else
            {
                ViewBag.Pais = database.TB_PAIS.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
                ViewBag.Capital = database.TB_CAPITAL.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
                ViewBag.Continente = database.TB_CONTINENTE.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
                ViewBag.Atividade = database.TB_ATIVIDADE.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
                return View("../Modelo/Novo");
            }
        }

        public async Task<IActionResult> Editar(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dados = await database.TB_MODELO.FindAsync(id);
            if (dados == null)
            {
                return NotFound();
            }

            ViewBag.Pais = database.TB_PAIS.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
            ViewBag.Capital = database.TB_CAPITAL.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
            ViewBag.Continente = database.TB_CONTINENTE.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
            ViewBag.Atividade = database.TB_ATIVIDADE.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();

            ModeloDto paginaView = new ModeloDto();
            paginaView.Id = dados.Id;
            paginaView.PrimeiroNome = dados.PrimeiroNome;

            // paginaView.PaisID = dados.Pais.Id;
            // paginaView.CapitalID = dados.Capital.Id;
            // paginaView.ContinenteID = dados.Continente.Id;

            return View(paginaView);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Editar(ModeloDto dadosTemporario)
        {
            if (ModelState.IsValid)
            {
                TempData["confirmacao"] = " Registro Atualizado com Sucesso.";

                var dados = await database.TB_MODELO.FindAsync(dadosTemporario.Id);
                dados.PrimeiroNome = dadosTemporario.PrimeiroNome;
                database.SaveChanges();
                return RedirectToAction(nameof(Index));
            }
            else
            {
                ViewBag.Pais = database.TB_PAIS.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
                ViewBag.Capital = database.TB_CAPITAL.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
                ViewBag.Continente = database.TB_CONTINENTE.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
                ViewBag.Atividade = database.TB_ATIVIDADE.Where(cat => cat.ativo == Convert.ToChar("S")).ToList();
                return View("../Modelo/Editar");
            }
        }
    }
}