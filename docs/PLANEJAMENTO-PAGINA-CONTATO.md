# 📧 Planejamento: Página de Contato

## 🎯 Objetivo
Criar uma interface limpa e elegante para mensagens e parcerias, mantendo a essência "Digital Hardcover" e os pilares de **Acolhimento**, **Leveza**, **Prestígio** e **Autenticidade**.

---

## 📐 Estrutura da Página

### 1. **Hero Section (Cabeçalho)**
**Objetivo**: Criar uma primeira impressão acolhedora e próxima

**Elementos**:
- **Título Principal**: "Vamos conversar?" (tom de proximidade, primeira pessoa)
- **Subtítulo**: Texto curto e acolhedor explicando o propósito da página
- **Decoração**: Traços decorativos sutis (SVG) nos cantos, seguindo o padrão das LPs
- **Background**: Efeito Aurora sutil + possível textura de papel

**Design**:
- Layout centralizado
- Tipografia serifada (Playfair Display) para o título
- Tipografia sans-serif (Inter) para o subtítulo
- Espaçamento generoso (padding vertical: 6-8rem)
- Scroll reveal: fade + movimento de baixo para cima

**Tom de Voz**:
- "Vamos conversar?" (ao invés de "Entre em contato")
- "Adoraria saber o que você tem a dizer" (ao invés de "Preencha o formulário")

---

### 2. **Formulário de Contato (Seção Principal)**
**Objetivo**: Interface limpa e intuitiva para capturar mensagens

#### **Layout**
- **Container**: Centralizado, largura máxima de ~700px (não 65ch, pois formulários precisam de mais espaço)
- **Background**: Paper Container (glassmorphism sutil)
- **Espaçamento**: Generoso entre campos (gap: 1.5rem - 2rem)
- **Arredondamento**: 32px (bordas generosas)

#### **Campos do Formulário**

**1. Nome**
- Tipo: `text`
- Label: "Como você gostaria de ser chamado?"
- Placeholder: "Seu nome"
- Validação: Obrigatório, mínimo 2 caracteres
- Estilo: Input com glassmorphism, borda sutil, focus com glow roxo/azul

**2. E-mail**
- Tipo: `email`
- Label: "Seu melhor e-mail"
- Placeholder: "email@exemplo.com"
- Validação: Obrigatório, formato de e-mail válido
- Estilo: Mesmo padrão do campo Nome

**3. Assunto**
- Tipo: `select` (dropdown)
- Label: "Sobre o que você gostaria de falar?"
- Opções:
  - "Mensagem de Leitor" (padrão)
  - "Convite para Evento"
  - "Parcerias"
  - "Outro" (mostra campo adicional quando selecionado)
- Estilo: Select customizado com glassmorphism

**4. Campo "Outro" (Condicional)**
- Aparece apenas quando "Outro" é selecionado no Assunto
- Tipo: `text`
- Label: "Especifique"
- Placeholder: "Conte-me mais sobre..."
- Animação: Fade in suave quando aparece

**5. Mensagem**
- Tipo: `textarea`
- Label: "Sua mensagem"
- Placeholder: "Escreva sua mensagem aqui..."
- Rows: 6-8 linhas
- Validação: Obrigatório, mínimo 10 caracteres
- Estilo: Textarea com glassmorphism, resize vertical apenas

#### **Estados dos Campos**

**Estado Normal**:
- Background: `rgba(255, 255, 255, 0.8)` (glassmorphism)
- Borda: `rgba(216, 191, 216, 0.3)` (roxo sutil)
- Sombra: Muito sutil

**Estado Focus**:
- Borda: `#D8BFD8` (roxo mais intenso)
- Glow: `0 0 0 3px rgba(216, 191, 216, 0.1)` (ring sutil)
- Transição: 200ms suave

**Estado Válido** (após validação):
- Borda: Verde suave `rgba(76, 175, 80, 0.5)`
- Ícone: Check pequeno no canto direito (opcional)

**Estado Inválido**:
- Borda: Vermelho suave `rgba(244, 67, 54, 0.5)`
- Mensagem de erro abaixo do campo
- Ícone: X pequeno no canto direito (opcional)

#### **Botão de Envio**

**Estados**:
1. **Normal**: 
   - Background: Gradiente roxo/azul `linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)`
   - Texto: "Enviar mensagem"
   - Sombra: `0 8px 24px rgba(139, 107, 154, 0.3)`

2. **Hover**:
   - Elevação: `translateY(-2px)`
   - Sombra aumentada: `0 12px 32px rgba(139, 107, 154, 0.4)`
   - Duração: 300ms

3. **Active** (clique):
   - Escala: `scale(0.98)`
   - Opacidade: 90%
   - Duração: 100ms

4. **Loading** (enviando):
   - Texto: "Enviando..."
   - Spinner sutil (pequeno, discreto)
   - Botão desabilitado (opacidade 70%)
   - Cursor: `not-allowed`

5. **Sucesso**:
   - Texto: "Mensagem enviada! ✓"
   - Background: Verde suave
   - Ícone de check
   - Duração: 2-3 segundos antes de resetar

6. **Erro**:
   - Texto: "Erro ao enviar"
   - Background: Vermelho suave
   - Ícone de erro
   - Permite nova tentativa

**Características**:
- Arredondamento: 28px
- Padding: `px-8 py-4`
- Tipografia: Inter, Semibold, 16px
- Largura: 100% do container
- Transições: Suaves (200-300ms)

---

### 3. **Informações de Contato Alternativas**
**Objetivo**: Oferecer outras formas de contato além do formulário

**Elementos**:
- **E-mail Direto**: `contato@deborarayane.com` (link mailto)
- **Redes Sociais**: Links para Instagram, Facebook, Spotify
- **Texto Contextual**: "Ou me encontre nas redes sociais"

**Design**:
- Layout: Grid responsivo (2 colunas desktop, 1 mobile)
- Cards com glassmorphism
- Ícones elegantes (SVG)
- Hover: Elevação sutil + glow

---

### 4. **Rodapé**
**Objetivo**: Fechar a página com captura de newsletter e links

**Elementos**:
- **Newsletter**: Formulário de captura de e-mail (mesmo do FooterSection)
- **Links de Redes Sociais**: Ícones elegantes
- **Copyright**: Informações legais

**Design**:
- Consistente com o FooterSection da Home
- Espaçamento generoso
- Tipografia menor mas legível

---

## 🎨 Diretrizes de Design

### **Paleta de Cores**
- **Fundo**: `#F9F7F2` (Off-white / Branco Gelo)
- **Texto**: `#1A1A1A` (Grafite Profundo)
- **Acentos**: 
  - Roxo: `#D8BFD8` (Thistle)
  - Azul: `#B0C4DE` (Light Steel Blue)
  - Rosé: `#F0D6DD` (Rosé Leve)

### **Tipografia**
- **Títulos**: Playfair Display (serifada), Bold, 2.5rem - 3rem
- **Labels**: Inter (sans-serif), Medium, 0.875rem - 1rem
- **Corpo**: Inter (sans-serif), Regular, 1rem - 1.125rem
- **Botões**: Inter (sans-serif), Semibold, 1rem

### **Espaçamento**
- **Entre Seções**: 6-8rem (vertical)
- **Entre Campos**: 1.5rem - 2rem
- **Padding do Container**: 3rem - 4rem (horizontal), 4rem - 6rem (vertical)
- **Margens Laterais**: 5-8% (desktop), 4-5% (mobile)

### **Glassmorphism**
- **Background**: `rgba(255, 255, 255, 0.8)` - `rgba(255, 255, 255, 0.95)`
- **Backdrop Filter**: `blur(10px - 20px)`
- **Borda**: `1px solid rgba(216, 191, 216, 0.2)`
- **Sombra**: `0 8px 32px rgba(0, 0, 0, 0.1)`

### **Arredondamento**
- **Container Principal**: 32px
- **Inputs/Textarea**: 24px
- **Botões**: 28px
- **Cards**: 24px - 32px

---

## ✨ Animações e Transições

### **Scroll Reveal**
- **Hero**: Fade + movimento de baixo (30px), duração 700ms
- **Formulário**: Fade + movimento de baixo (20px), duração 600ms, delay 200ms
- **Informações Alternativas**: Fade + movimento de baixo (20px), duração 600ms, delay 400ms

### **Interações**
- **Hover em Inputs**: Borda muda de cor, glow aparece (200ms)
- **Focus em Inputs**: Ring de foco (3px), glow mais intenso
- **Hover em Botão**: Elevação + sombra aumentada (300ms)
- **Active em Botão**: Escala reduzida (100ms)

### **Validação em Tempo Real**
- **Campo Válido**: Borda verde aparece suavemente (300ms)
- **Campo Inválido**: Borda vermelha + mensagem de erro (300ms)
- **Mensagem de Erro**: Fade in de baixo (400ms)

### **Estados de Envio**
- **Loading**: Spinner aparece com fade (200ms)
- **Sucesso**: Mensagem aparece com fade + movimento de baixo (400ms)
- **Erro**: Mensagem aparece com fade + movimento de baixo (400ms)

---

## 📱 Responsividade

### **Mobile (< 640px)**
- **Padding**: Reduzido (2rem horizontal, 3rem vertical)
- **Largura do Container**: 100% - margens laterais
- **Espaçamento entre Campos**: 1.5rem
- **Tamanho de Fonte**: Ajustado (títulos menores)
- **Botão**: Largura total

### **Tablet (640px - 1024px)**
- **Largura do Container**: ~600px
- **Padding**: 3rem horizontal, 4rem vertical
- **Grid de Informações**: 2 colunas

### **Desktop (> 1024px)**
- **Largura do Container**: ~700px (máximo)
- **Padding**: 4rem horizontal, 6rem vertical
- **Espaçamento**: Generoso

---

## 🔧 Funcionalidades Técnicas

### **Validação**
- **Client-side**: Validação em tempo real com feedback visual
- **Server-side**: Validação adicional no backend (quando implementado)
- **Mensagens de Erro**: Claras, específicas e acolhedoras

### **Acessibilidade**
- **Labels**: Sempre associados aos campos (não apenas placeholders)
- **Focus States**: Visíveis e claros (navegação por teclado)
- **ARIA**: Atributos apropriados para screen readers
- **Contraste**: WCAG AA (mínimo 4.5:1)
- **Redução de Movimento**: Respeitar `prefers-reduced-motion`

### **Performance**
- **Lazy Loading**: Animações só ativam quando elementos entram no viewport
- **Otimização**: Usar `transform` e `opacity` para animações (GPU-accelerated)
- **Validação**: Debounce em validações em tempo real

---

## 📝 Textos e Conteúdo

### **Hero Section**
**Título**: "Vamos conversar?"
**Subtítulo**: "Adoraria saber o que você tem a dizer. Seja uma mensagem de leitor, um convite para evento ou uma proposta de parceria, estou aqui para ouvir."

### **Labels do Formulário**
- "Como você gostaria de ser chamado?" (Nome)
- "Seu melhor e-mail" (E-mail)
- "Sobre o que você gostaria de falar?" (Assunto)
- "Sua mensagem" (Mensagem)

### **Placeholders**
- Nome: "Seu nome"
- E-mail: "email@exemplo.com"
- Mensagem: "Escreva sua mensagem aqui..."

### **Mensagens de Validação**
- Nome vazio: "Por favor, me diga como você gostaria de ser chamado"
- E-mail inválido: "Por favor, insira um e-mail válido"
- Mensagem muito curta: "Sua mensagem precisa ter pelo menos 10 caracteres"

### **Mensagens de Feedback**
- Sucesso: "Mensagem enviada! Obrigada por entrar em contato. Responderei em breve. ❤️"
- Erro: "Ops! Algo deu errado. Por favor, tente novamente ou me envie um e-mail diretamente."

---

## 🎯 Objetivos de UX

### **Acolhimento**
- Tom de voz próximo e íntimo
- Mensagens de erro acolhedoras (não técnicas)
- Feedback positivo e encorajador

### **Leveza**
- Espaçamento generoso
- Transições suaves
- Sem pressão ou urgência

### **Prestígio**
- Design premium (glassmorphism, efeito Aurora)
- Tipografia refinada
- Detalhes cuidadosos

### **Autenticidade**
- Textos genuínos (não corporativos)
- Elementos que remetem ao processo criativo
- Personalidade da autora presente

---

## 🚀 Implementação

### **Estrutura de Arquivos**
```
src/app/contato/
  └── page.tsx (página principal)

src/components/contato/
  ├── ContactHero.tsx (seção hero)
  ├── ContactForm.tsx (formulário)
  └── ContactAlternatives.tsx (informações alternativas)
```

### **Tecnologias**
- **Next.js App Router**: Para roteamento
- **React Hooks**: `useState`, `useEffect` para gerenciamento de estado
- **Tailwind CSS**: Para estilização
- **Intersection Observer**: Para scroll reveal
- **Form Validation**: Validação customizada ou biblioteca leve

### **Integração Futura**
- **API Route**: `/api/contact` para processar envio
- **Email Service**: Integração com SendGrid, Resend, ou similar
- **Rate Limiting**: Proteção contra spam
- **ReCAPTCHA**: Opcional, se necessário

---

## ✅ Checklist de Implementação

- [ ] Criar estrutura de pastas
- [ ] Implementar Hero Section
- [ ] Criar componente de formulário
- [ ] Implementar validação em tempo real
- [ ] Adicionar estados de loading/sucesso/erro
- [ ] Criar seção de informações alternativas
- [ ] Implementar scroll reveal
- [ ] Adicionar responsividade
- [ ] Testar acessibilidade
- [ ] Validar contraste de cores
- [ ] Testar em diferentes dispositivos
- [ ] Integrar com API (quando disponível)
- [ ] Adicionar ao menu de navegação

---

## 📌 Notas Finais

A página de contato deve ser um **refúgio acolhedor** onde leitores, parceiros e interessados se sintam à vontade para se comunicar. Cada elemento deve reforçar a personalidade da Débora: alegre, comunicativa e profundamente apaixonada pelo universo das letras.

O formulário não é apenas uma ferramenta técnica, mas uma **ponte emocional** entre a autora e seu público. Por isso, cada detalhe - desde o texto do placeholder até a animação de sucesso - deve transmitir calor humano e autenticidade.

**Lembre-se**: A página de contato é uma extensão da obra literária da Débora. Ela deve fazer o visitante sentir que está escrevendo uma carta para uma amiga, não preenchendo um formulário corporativo.

---

**Documento criado para guiar a implementação da página de contato.**
**Última atualização**: Baseado nos documentos de referência do projeto.
**Status**: Pronto para implementação.
