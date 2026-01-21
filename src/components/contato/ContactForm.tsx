"use client";

import { useEffect, useRef, useState } from "react";

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  otherSubject?: string;
  message?: string;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  otherSubject: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "Mensagem de Leitor",
    otherSubject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Validação em tempo real
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "Por favor, me diga como você gostaria de ser chamado";
        }
        if (value.trim().length < 2) {
          return "O nome precisa ter pelo menos 2 caracteres";
        }
        return "";
      case "email":
        if (!value.trim()) {
          return "Por favor, insira seu e-mail";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Por favor, insira um e-mail válido";
        }
        return "";
      case "subject":
        if (!value) {
          return "Por favor, selecione um assunto";
        }
        return "";
      case "otherSubject":
        if (formData.subject === "Outro" && !value.trim()) {
          return "Por favor, especifique o assunto";
        }
        return "";
      case "message":
        if (!value.trim()) {
          return "Por favor, escreva sua mensagem";
        }
        if (value.trim().length < 10) {
          return "Sua mensagem precisa ter pelo menos 10 caracteres";
        }
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validar campo quando o usuário digita
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    // Validar campo "otherSubject" quando "Outro" é selecionado
    if (name === "subject" && value === "Outro") {
      setTouched((prev) => ({ ...prev, otherSubject: true }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const createBlurHandler = (fieldName: string) => {
    return (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      handleBlur(e);
      // Resetar estilo quando sai do foco (se não estiver em estado válido/inválido)
      if (getFieldState(fieldName) === "normal") {
        e.currentTarget.style.borderColor = "rgba(216, 191, 216, 0.3)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
      }
    };
  };

  const createFocusHandler = (fieldName: string) => {
    return (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      if (getFieldState(fieldName) === "normal") {
        e.currentTarget.style.borderColor = "#D8BFD8";
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(216, 191, 216, 0.1)";
      }
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Marcar todos os campos como tocados
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validar todos os campos
    const newErrors: FieldErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormState]);
      if (error) {
        newErrors[key as keyof FormState] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Enviar formulário
    setSubmitStatus("loading");

    try {
      // Simulação de envio - substituir por API real depois
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simular sucesso (ou erro)
      const shouldSucceed = Math.random() > 0.1; // 90% de chance de sucesso

      if (shouldSucceed) {
        setSubmitStatus("success");
        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          subject: "Mensagem de Leitor",
          otherSubject: "",
          message: "",
        });
        setTouched({});
        setErrors({});

        // Resetar status após 3 segundos
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }
  };

  const getFieldState = (name: string) => {
    if (!touched[name]) return "normal";
    if (errors[name as keyof FieldErrors]) return "invalid";
    if (formData[name as keyof FormState]) return "valid";
    return "normal";
  };

  const getButtonStyle = () => {
    switch (submitStatus) {
      case "loading":
        return {
          background: "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
          opacity: 0.7,
          cursor: "not-allowed",
        };
      case "success":
        return {
          background: "linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)",
        };
      case "error":
        return {
          background: "linear-gradient(135deg, #F44336 0%, #E57373 100%)",
        };
      default:
        return {
          background: "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
        };
    }
  };

  return (
    <section className="relative py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={containerRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {/* Layout de Duas Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Coluna Esquerda - Formulário */}
            <div>
              {/* Container Principal com Glassmorphism */}
              <div
                className="rounded-[32px] p-6 sm:p-8 lg:p-10 backdrop-blur-xl border transition-all duration-300 h-full"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  borderColor: "rgba(216, 191, 216, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Título da Seção */}
                <div className="mb-6">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                    Envie sua mensagem
                  </h2>
                  <p className="text-foreground/70 text-sm sm:text-base">
                    Preencha o formulário e eu responderei o mais breve possível
                  </p>
                </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground/80"
                >
                  Como você gostaria de ser chamado?
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={createBlurHandler("name")}
                    placeholder="Seu nome"
                    className="w-full px-5 py-4 rounded-[24px] border-2 transition-all duration-300 focus:outline-none text-foreground placeholder:text-foreground/40"
                    style={{
                      borderColor:
                        getFieldState("name") === "valid"
                          ? "rgba(76, 175, 80, 0.5)"
                          : getFieldState("name") === "invalid"
                          ? "rgba(244, 67, 54, 0.5)"
                          : "rgba(216, 191, 216, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      boxShadow:
                        getFieldState("name") === "invalid" || getFieldState("name") === "valid"
                          ? "none"
                          : "0 2px 8px rgba(0, 0, 0, 0.05)",
                    }}
                    onFocus={createFocusHandler("name")}
                  />
                  {getFieldState("name") === "valid" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                  {getFieldState("name") === "invalid" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 animate-fadeIn">{errors.name}</p>
                )}
              </div>

              {/* Campo E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground/80"
                >
                  Seu melhor e-mail
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={createBlurHandler("email")}
                    placeholder="email@exemplo.com"
                    className="w-full px-5 py-4 rounded-[24px] border-2 transition-all duration-300 focus:outline-none text-foreground placeholder:text-foreground/40"
                    style={{
                      borderColor:
                        getFieldState("email") === "valid"
                          ? "rgba(76, 175, 80, 0.5)"
                          : getFieldState("email") === "invalid"
                          ? "rgba(244, 67, 54, 0.5)"
                          : "rgba(216, 191, 216, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      boxShadow:
                        getFieldState("email") === "invalid" || getFieldState("email") === "valid"
                          ? "none"
                          : "0 2px 8px rgba(0, 0, 0, 0.05)",
                    }}
                    onFocus={createFocusHandler("email")}
                  />
                  {getFieldState("email") === "valid" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                  {getFieldState("email") === "invalid" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 animate-fadeIn">{errors.email}</p>
                )}
              </div>

              {/* Campo Assunto */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-foreground/80"
                >
                  Sobre o que você gostaria de falar?
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={createBlurHandler("subject")}
                    className="w-full px-5 py-4 rounded-[24px] border-2 transition-all duration-300 focus:outline-none appearance-none cursor-pointer text-foreground bg-white"
                    style={{
                      borderColor:
                        getFieldState("subject") === "valid"
                          ? "rgba(76, 175, 80, 0.5)"
                          : getFieldState("subject") === "invalid"
                          ? "rgba(244, 67, 54, 0.5)"
                          : "rgba(216, 191, 216, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    }}
                    onFocus={createFocusHandler("subject")}
                  >
                    <option value="Mensagem de Leitor">Mensagem de Leitor</option>
                    <option value="Convite para Evento">Convite para Evento</option>
                    <option value="Parcerias">Parcerias</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {/* Ícone de seta customizado */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-foreground/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-500 animate-fadeIn">{errors.subject}</p>
                )}
              </div>

              {/* Campo "Outro" (Condicional) */}
              {formData.subject === "Outro" && (
                <div
                  className="animate-fadeIn"
                  style={{
                    animation: "fadeIn 0.4s ease-out",
                  }}
                >
                  <label
                    htmlFor="otherSubject"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Especifique
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="otherSubject"
                      name="otherSubject"
                      value={formData.otherSubject}
                      onChange={handleChange}
                      onBlur={createBlurHandler("otherSubject")}
                      placeholder="Conte-me mais sobre..."
                      className="w-full px-5 py-4 rounded-[24px] border-2 transition-all duration-300 focus:outline-none text-foreground placeholder:text-foreground/40"
                      style={{
                        borderColor:
                          getFieldState("otherSubject") === "valid"
                            ? "rgba(76, 175, 80, 0.5)"
                            : getFieldState("otherSubject") === "invalid"
                            ? "rgba(244, 67, 54, 0.5)"
                            : "rgba(216, 191, 216, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                      }}
                      onFocus={createFocusHandler("otherSubject")}
                    />
                    {getFieldState("otherSubject") === "valid" && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                    {getFieldState("otherSubject") === "invalid" && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <svg
                          className="w-5 h-5 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.otherSubject && (
                    <p className="mt-2 text-sm text-red-500 animate-fadeIn">
                      {errors.otherSubject}
                    </p>
                  )}
                </div>
              )}

              {/* Campo Mensagem */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground/80"
                >
                  Sua mensagem
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={createBlurHandler("message")}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={5}
                    className="w-full px-5 py-4 rounded-[24px] border-2 transition-all duration-300 focus:outline-none resize-y text-foreground placeholder:text-foreground/40"
                    style={{
                      borderColor:
                        getFieldState("message") === "valid"
                          ? "rgba(76, 175, 80, 0.5)"
                          : getFieldState("message") === "invalid"
                          ? "rgba(244, 67, 54, 0.5)"
                          : "rgba(216, 191, 216, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      boxShadow:
                        getFieldState("message") === "invalid" || getFieldState("message") === "valid"
                          ? "none"
                          : "0 2px 8px rgba(0, 0, 0, 0.05)",
                      minHeight: "120px",
                    }}
                    onFocus={createFocusHandler("message")}
                  />
                  {getFieldState("message") === "valid" && (
                    <div className="absolute right-4 top-4">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                  {getFieldState("message") === "invalid" && (
                    <div className="absolute right-4 top-4">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500 animate-fadeIn">{errors.message}</p>
                )}
              </div>

              {/* Botão de Envio */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="w-full px-8 py-4 rounded-[28px] font-semibold text-base sm:text-lg transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  style={{
                    ...getButtonStyle(),
                    color: "#FFFFFF",
                    boxShadow:
                      submitStatus === "idle"
                        ? "0 8px 24px rgba(139, 107, 154, 0.3)"
                        : "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    if (submitStatus === "idle") {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(139, 107, 154, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (submitStatus === "idle") {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(139, 107, 154, 0.3)";
                    }
                  }}
                  onMouseDown={(e) => {
                    if (submitStatus === "idle") {
                      e.currentTarget.style.transform = "scale(0.98)";
                      e.currentTarget.style.opacity = "0.9";
                    }
                  }}
                  onMouseUp={(e) => {
                    if (submitStatus === "idle") {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.opacity = "1";
                    }
                  }}
                >
                  {submitStatus === "loading" && (
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}
                  {submitStatus === "success" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                  {submitStatus === "error" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <span>
                    {submitStatus === "loading"
                      ? "Enviando..."
                      : submitStatus === "success"
                      ? "Mensagem enviada! ✓"
                      : submitStatus === "error"
                      ? "Erro ao enviar"
                      : "Enviar mensagem"}
                  </span>
                </button>

                {/* Mensagem de Sucesso/Erro */}
                {submitStatus === "success" && (
                  <p className="mt-4 text-center text-sm text-green-600 animate-fadeIn">
                    Obrigada por entrar em contato! Responderei em breve. ❤️
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="mt-4 text-center text-sm text-red-500 animate-fadeIn">
                    Ops! Algo deu errado. Por favor, tente novamente ou me envie um e-mail
                    diretamente.
                  </p>
                )}
              </div>
            </form>
          </div>
            </div>

            {/* Coluna Direita - Card Informativo */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div
                className="rounded-[32px] p-6 sm:p-8 lg:p-10 backdrop-blur-xl border h-full flex flex-col justify-between transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  borderColor: "rgba(216, 191, 216, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Conteúdo Principal */}
                <div>
                  {/* Título */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4 text-foreground">
                    Vamos conversar?
                  </h3>

                  {/* Mensagem Acolhedora */}
                  <div className="space-y-3 mb-6">
                    <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                      Adoraria saber o que você tem a dizer. Seja uma mensagem de leitor compartilhando
                      suas impressões sobre meus livros, um convite para eventos literários, ou uma proposta
                      de parceria, estou aqui para ouvir.
                    </p>
                    <p className="text-foreground/70 leading-relaxed text-xs sm:text-sm">
                      Respondo todas as mensagens pessoalmente, então pode levar alguns dias para eu
                      conseguir responder. Mas prometo que cada mensagem será lida com carinho! ❤️
                    </p>
                  </div>

                  {/* Divisor Decorativo */}
                  <div
                    className="h-px w-20 my-6"
                    style={{
                      background: "linear-gradient(to right, #D8BFD8 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Informações de Contato */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground/60 mb-3 text-center lg:text-left">
                      Outras formas de contato
                    </h4>
                    
                    {/* E-mail Direto */}
                    <a
                      href="mailto:contato@deborarayane.com"
                      className="flex items-center gap-3 p-3 rounded-[20px] transition-all duration-300 hover:shadow-md group"
                      style={{
                        background: "rgba(216, 191, 216, 0.1)",
                        border: "1px solid rgba(216, 191, 216, 0.2)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(216, 191, 216, 0.15)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(216, 191, 216, 0.1)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(216, 191, 216, 0.2)",
                        }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: "#8B6B9A" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 mb-1">E-mail</p>
                        <p className="text-sm font-medium text-foreground group-hover:text-[#8B6B9A] transition-colors">
                          contato@deborarayane.com
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Redes Sociais */}
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground/60 mb-3 text-center lg:text-left">
                      Me encontre nas redes
                    </h4>
                    <div className="flex gap-3 justify-center lg:justify-start">
                      {/* Instagram */}
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        style={{
                          background: "rgba(139, 107, 154, 0.1)",
                          border: "1px solid rgba(139, 107, 154, 0.2)",
                        }}
                        aria-label="Instagram"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ color: "#8B6B9A" }}
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      {/* Facebook */}
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        style={{
                          background: "rgba(139, 107, 154, 0.1)",
                          border: "1px solid rgba(139, 107, 154, 0.2)",
                        }}
                        aria-label="Facebook"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ color: "#8B6B9A" }}
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>

                      {/* Spotify */}
                      <a
                        href="https://open.spotify.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        style={{
                          background: "rgba(139, 107, 154, 0.1)",
                          border: "1px solid rgba(139, 107, 154, 0.2)",
                        }}
                        aria-label="Spotify"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ color: "#8B6B9A" }}
                        >
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.539.3.719 1.02.42 1.56-.3.421-1.02.599-1.56.3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
