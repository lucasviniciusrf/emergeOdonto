package EmergeOdontoAPI.EmergeOdontoAPI.controllers;


import EmergeOdontoAPI.EmergeOdontoAPI.entities.Agendamento;
import EmergeOdontoAPI.EmergeOdontoAPI.services.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/perfil")
@CrossOrigin(origins = "*")
public class PerfilController {
    @Autowired
    private AgendamentoService agendamentoService;

    @GetMapping("/{email}")
    public List<Agendamento> listarDados(@PathVariable String email) {
        return agendamentoService.listarDados(email);
    }
}
