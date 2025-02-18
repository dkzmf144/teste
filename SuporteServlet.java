import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

@WebServlet("/SuporteServlet")
public class SuporteServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Recebe os dados do formulário
        String nome = request.getParameter("nome");
        String email = request.getParameter("email");
        String mensagem = request.getParameter("mensagem");

        // Exibe os dados no console (pode ser substituído por armazenamento em banco de dados)
        System.out.println("Nome: " + nome);
        System.out.println("Email: " + email);
        System.out.println("Mensagem: " + mensagem);

        // Configura a resposta
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Obrigado por entrar em contato, " + nome + "!</h2>");
        out.println("<p>Recebemos sua solicitação e estaremos analisando em breve.</p>");
        out.println("<p><a href='suporte.html'>Voltar ao formulário</a></p>");
        out.println("</body></html>");
    }
}
