import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper,
  Stack,
  TextField,
  Alert,
  IconButton,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "@mui/icons-material/Star";
import ChatIcon from "@mui/icons-material/Chat";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";

// --- Card animado com framer-motion ---
function HoverCard({ icon, title, desc, direction = "up", delay = 0 }) {
  const [hover, setHover] = useState(false);
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 50, delay },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={variants}
      style={{ width: "100%", height: "100%" }}
    >
      <Paper
        elevation={hover ? 12 : 2}
        sx={{
          p: 4,
          height: "100%",
          textAlign: "center",
          borderRadius: 4,
          transition: "transform 0.2s, box-shadow 0.2s",
          transform: hover ? "translateY(-8px) scale(1.03)" : "none",
          bgcolor: hover ? "white" : "#f3f6fd",
          cursor: "pointer",
          minHeight: { xs: 190, md: 220 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box sx={{ mb: 2 }}>{icon}</Box>
        <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography color="text.secondary">{desc}</Typography>
      </Paper>
    </motion.div>
  );
}

export default function App() {
  // Config do carrossel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  // Cards de benefícios
  const cardData = [
    {
      icon: <StarIcon fontSize="large" color="primary" />,
      title: "Atendimento Premium",
      desc: "Responda todo mundo rápido, com mensagens automáticas e personalizadas.",
      direction: "left",
    },
    {
      icon: <ChatIcon fontSize="large" color="primary" />,
      title: "Tudo centralizado",
      desc: "Gerencie todos os atendimentos, históricos e clientes em um só lugar.",
      direction: "up",
    },
    {
      icon: <AutoAwesomeIcon fontSize="large" color="primary" />,
      title: "Automatize e ganhe tempo",
      desc: "Fluxos, respostas automáticas, pós-venda fácil, tudo sem dor de cabeça.",
      direction: "down",
    },
    {
      icon: <SupportAgentIcon fontSize="large" color="primary" />,
      title: "Suporte de verdade",
      desc: "Fale direto com quem entende de WhatsApp para empresas.",
      direction: "right",
    },
  ];

  // --- Formulário de contato ---
  const [contato, setContato] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleContatoChange = (e) => {
    setContato({ ...contato, [e.target.name]: e.target.value });
  };

  const handleContatoSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    // Aqui fazer o POST para API/Formspree/EmailJS...
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setContato({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
      setTimeout(() => setEnviado(false), 4000);
    }, 1500); // Simulação de envio
  };

  return (
    <>
      {/* Menu fixo */}
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="/logo_meuzapgestor_robo.png"
              alt="Logo MeuZapGestor"
              style={{
                height: 38,
                marginRight: 10,
              }}
            />
            <Typography variant="h5" color="primary" fontWeight="bold">
              MeuZapGestor
            </Typography>
          </Box>
          <Stack direction="row" spacing={4}>
            <Button
              color="primary"
              component="a"
              href="#sobre"
              sx={{ fontWeight: 500 }}
            >
              Sobre
            </Button>
            <Button
              color="primary"
              component="a"
              href="#beneficios"
              sx={{ fontWeight: 500 }}
            >
              Benefícios
            </Button>
            <Button
              color="primary"
              component="a"
              href="#como-funciona"
              sx={{ fontWeight: 500 }}
            >
              Como funciona
            </Button>
            <Button
              color="primary"
              component="a"
              href="#contato"
              sx={{ fontWeight: 500 }}
            >
              Contato
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Espaçamento pro menu fixo */}
      <Box sx={{ pt: { xs: 10, md: 12 } }} />

      {/* Carrossel */}
      <Box
        sx={{
          width: "100vw",
          height: "320px",
          bgcolor: "#edf2fa",
          overflow: "hidden",
          p: 0,
          m: 0,
        }}
      >
        <Slider {...sliderSettings}>
          {[1, 2, 3].map((num) => (
            <Box
              key={num}
              sx={{
                width: "100vw",
                height: "320px",
                p: 0,
                m: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                bgcolor: "#edf2fa",
              }}
            >
              <img
                src={`/banner${num}.png`}
                alt={`Banner ${num}`}
                style={{
                  width: "100vw",
                  height: "320px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Hero */}
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "60vh",
          pt: 10,
          pb: 6,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            WhatsApp do seu negócio
            <br />
            com cara de empresa grande!!
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
          >
            Atenda, automatize e encante clientes. Tudo num só lugar, simples,
            moderno e com sua cara.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 99,
              px: 5,
              py: 2,
              fontWeight: "bold",
              boxShadow: 3,
              fontSize: 18,
            }}
            href="#contato"
          >
            Quero saber mais
          </Button>
        </Container>
      </Box>

      {/* Cards de Benefícios 2x2 centralizado */}
      <Box id="beneficios" sx={{ py: 8, bgcolor: "#f6f8fc" }}>
        <Container>
          <Typography
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
            align="center"
          >
            Por que usar o MeuZapGestor?
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {cardData.map((item, i) => (
              <Grid item xs={12} sm={6} md={6} key={i} sx={{ display: "flex" }}>
                <HoverCard {...item} delay={i * 0.13} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Box sobre */}
      <Box id="sobre" sx={{ py: 8, bgcolor: "#f6f8fc" }}>
        <Container>
          <Typography
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
            align="center"
          >
            Sobre o MeuZapGestor
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            sx={{ maxWidth: 800, mx: "auto", mb: 2 }}
          >
            O MeuZapGestor nasceu para facilitar o atendimento pelo WhatsApp
            para pequenos negócios e prestadores de serviço. Nosso objetivo é
            automatizar, centralizar e simplificar o seu dia a dia — para que
            você foque no que importa: encantar seus clientes.
          </Typography>
          <Typography
            color="text.secondary"
            align="center"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            Somos apaixonados por tecnologia simples, acessível e útil. Nosso
            sistema evolui junto com você, ouvindo as suas sugestões e trazendo
            as melhores soluções para que seu atendimento, vendas e
            relacionamento fiquem cada vez mais fáceis, rápidos e profissionais.
          </Typography>
        </Container>
      </Box>

      {/* Como funciona (3 em linha) */}
      <Box id="como-funciona" sx={{ py: 8 }}>
        <Container>
          <Typography
            variant="h4"
            color="primary"
            fontWeight="bold"
            gutterBottom
            align="center"
          >
            Como funciona na prática?
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {[
              {
                title: "Receba mensagens dos clientes",
                desc: "Seu WhatsApp vira uma central: cada conversa, um possível negócio.",
              },
              {
                title: "Automatize fluxos e respostas",
                desc: "Mensagens rápidas, automações, follow-ups e lembretes sem esforço.",
              },
              {
                title: "Controle pedidos e histórico",
                desc: "Veja o que cada cliente pediu, gerencie status e agilize atendimento.",
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i} sx={{ display: "flex" }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Área de Contato */}
      <Box id="contato" sx={{ py: 8, bgcolor: "#f6f8fc" }}>
        <Container maxWidth="sm">
          <Paper sx={{ p: 4, borderRadius: 4, boxShadow: 2 }}>
            <Typography
              variant="h5"
              color="primary"
              fontWeight="bold"
              align="center"
              gutterBottom
            >
              Fale com a gente!
            </Typography>
            <form onSubmit={handleContatoSubmit}>
              <TextField
                label="Nome"
                name="nome"
                value={contato.nome}
                onChange={handleContatoChange}
                required
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="E-mail"
                name="email"
                value={contato.email}
                onChange={handleContatoChange}
                type="email"
                required
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Telefone"
                name="telefone"
                value={contato.telefone}
                onChange={handleContatoChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Mensagem"
                name="mensagem"
                value={contato.mensagem}
                onChange={handleContatoChange}
                multiline
                minRows={3}
                required
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                disabled={enviando}
                sx={{ width: "100%", py: 1, fontWeight: "bold", fontSize: 17 }}
              >
                {enviando ? "Enviando..." : "Enviar"}
              </Button>
              {enviado && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  Mensagem enviada! Em breve retornamos 😉
                </Alert>
              )}
            </form>
          </Paper>
        </Container>
      </Box>

      {/* Rodapé */}
      {/* Rodapé */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#061a53",
          color: "white",
          pt: 6,
          pb: 2,
          mt: 10,
          borderTopLeftRadius: { md: 50 },
          borderTopRightRadius: { md: 50 },
          width: "100vw",
          minHeight: 260,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="flex-start"
            justifyContent="center"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            {/* Logo + slogan */}
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <img
                  src="/logo_meuzapgestor_robo.png"
                  alt="Logo"
                  style={{ height: 60, marginRight: 20 }}
                />
                <Typography variant="h6" color="white" fontWeight="bold">
                  MeuZapGestor
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 2, color: "#dde4fc" }}>
                Seu WhatsApp com cara de empresa grande.
              </Typography>
            </Grid>

            {/* Menu 1 */}
            <Grid item xs={12} sm={4} md={2}>
              <Typography fontWeight="bold" gutterBottom>
                Início
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#dde4fc", display: "block", mb: 0.5 }}
              >
                Home
              </Typography>
              <Typography
                component="a"
                href="#beneficios"
                sx={{ color: "#dde4fc", display: "block", mb: 0.5 }}
              >
                Benefícios
              </Typography>
              <Typography
                component="a"
                href="#sobre"
                sx={{ color: "#dde4fc", display: "block" }}
              >
                Sobre
              </Typography>
            </Grid>
            {/* Menu 2 */}
            <Grid item xs={12} sm={4} md={2}>
              <Typography fontWeight="bold" gutterBottom>
                Sobre-nós
              </Typography>
              <Typography
                component="a"
                href="#empresa"
                sx={{ color: "#dde4fc", display: "block", mb: 0.5 }}
              >
                Empresa
              </Typography>
              <Typography
                component="a"
                href="#contato"
                sx={{ color: "#dde4fc", display: "block", mb: 0.5 }}
              >
                Contato
              </Typography>
            </Grid>
            {/* Menu 3 */}
            <Grid item xs={12} sm={4} md={2}>
              <Typography fontWeight="bold" gutterBottom>
                Suporte
              </Typography>
              <Typography
                component="a"
                href="#faq"
                sx={{ color: "#dde4fc", display: "block", mb: 0.5 }}
              >
                FAQ
              </Typography>
              <Typography
                component="a"
                href="#telefones"
                sx={{ color: "#dde4fc", display: "block", mb: 0.5 }}
              >
                Telefones
              </Typography>
              <Typography
                component="a"
                href="#chat"
                sx={{ color: "#dde4fc", display: "block" }}
              >
                Chat
              </Typography>
            </Grid>
            {/* Instagram */}
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <IconButton
                component="a"
                href="https://instagram.com/meuzapgestor" // Troque pelo seu Instagram real
                target="_blank"
                rel="noopener"
                sx={{
                  color: "#fff",
                  bgcolor: "#e1306c",
                  "&:hover": { bgcolor: "#c72c5c" },
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  boxShadow: 2,
                }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", mt: 6, color: "#b8c3db" }}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Copyright - MeuZapGestor
            </Typography>
            <Typography variant="body2">
              Desenvolvido por João Eduardo Lima
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
