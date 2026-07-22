import blog from "@/assets/heros/blog.webp";
import bairro from "@/assets/heros/bairro.webp";
import cidade from "@/assets/heros/cidade.webp";
import comercial from "@/assets/heros/comercial.webp";
import pertoDeMim from "@/assets/heros/perto-de-mim.webp";
import emergencia from "@/assets/heros/emergencia.webp";

import limpezaCaixaDagua from "@/assets/heros/limpeza-caixa-dagua.webp";
import roedores from "@/assets/heros/roedores.webp";
import aves from "@/assets/heros/aves.webp";
import residencial from "@/assets/heros/residencial.webp";
import condominial from "@/assets/heros/condominial.webp";
import preventiva from "@/assets/heros/preventiva.webp";
import restaurante from "@/assets/heros/restaurante.webp";
import supermercado from "@/assets/heros/supermercado.webp";
import industria from "@/assets/heros/industria.webp";
import escola from "@/assets/heros/escola.webp";
import hospital from "@/assets/heros/hospital.webp";
import hotel from "@/assets/heros/hotel.webp";
import sanitizacao from "@/assets/heros/sanitizacao.webp";
import telhado from "@/assets/heros/telhado.webp";
import calha from "@/assets/heros/calha.webp";
import sotao from "@/assets/heros/sotao.webp";
import laudo from "@/assets/heros/laudo.webp";

import esgoto from "@/assets/heros/esgoto.webp";
import pia from "@/assets/heros/pia.webp";
import vaso from "@/assets/heros/vaso.webp";
import ralo from "@/assets/heros/ralo.webp";
import hidrojato from "@/assets/heros/hidrojato.webp";
import fossa from "@/assets/heros/fossa.webp";

export const heroImages = {
  blog,
  bairro,
  cidade,
  comercial,
  pertoDeMim,
  emergencia,
};

export const servicoEspecialHero: Record<string, string> = {
  "limpeza-caixa-dagua": limpezaCaixaDagua,
  "controle-roedores": roedores,
  "pombos-e-morcegos": aves,
  "dedetizacao-residencial": residencial,
  "dedetizacao-condominial": condominial,
  "dedetizacao-preventiva": preventiva,
  "dedetizacao-restaurantes": restaurante,
  "dedetizacao-supermercados": supermercado,
  "dedetizacao-industrias": industria,
  "dedetizacao-escolas": escola,
  "dedetizacao-hospitais-clinicas": hospital,
  "dedetizacao-hoteis": hotel,
  sanitizacao: sanitizacao,
  "limpeza-de-telhado": telhado,
  "limpeza-de-calha": calha,
  "limpeza-de-sotao": sotao,
  "laudo-bacteriologico": laudo,
};

export const servicoDesentupimentoHero: Record<string, string> = {
  "desentupimento-esgoto": esgoto,
  "desentupimento-pia": pia,
  "desentupimento-vaso-sanitario": vaso,
  "desentupimento-ralo": ralo,
  hidrojateamento: hidrojato,
  "limpeza-fossa": fossa,
};