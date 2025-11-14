package EmergeOdontoAPI.EmergeOdontoAPI.controllers;

import EmergeOdontoAPI.EmergeOdontoAPI.entities.Agendamento;
import EmergeOdontoAPI.EmergeOdontoAPI.services.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/agendamento")
@CrossOrigin(origins = "*")
public class AgendamentoController {
    @Autowired
    private AgendamentoService agendamentoService;

    @PostMapping
    public Agendamento cadastroCliente (@RequestBody Agendamento clienteCadastro){
        return agendamentoService.cadastroCliente(clienteCadastro);
    }
}
