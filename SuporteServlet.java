import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

@WebServlet("/SuporteServlet")  // Anotação para mapear o Servlet
public class SuporteServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Recebe os dados do formulário
        String nome = request.getParameter("nome");
        String email = request.getParameter("email");
        String mensagem = request.getParameter("mensagem");

        // Aqui você pode processar os dados, como salvar em um banco de dados ou enviar um e-mail

        // Configura a resposta (resposta em HTML)
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Obrigado por entrar em contato, " + nome + "!</h2>");
        out.println("<p>Recebemos sua solicitação e estaremos analisando em breve.</p>");
        out.println("<p><a href='index.html'>Voltar ao formulário</a></p>");
        out.println("</body></html>");
    }
}
