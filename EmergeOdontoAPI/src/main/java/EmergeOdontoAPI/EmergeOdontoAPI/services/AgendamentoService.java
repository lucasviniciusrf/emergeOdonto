package EmergeOdontoAPI.EmergeOdontoAPI.services;

import EmergeOdontoAPI.EmergeOdontoAPI.entities.Agendamento;
import EmergeOdontoAPI.EmergeOdontoAPI.repositories.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendamentoService {
    @Autowired
    private AgendamentoRepository agendamentoRepository;

    public Agendamento cadastroCliente (Agendamento clienteCadastro){
        return agendamentoRepository.save(clienteCadastro);
    }

    public List<Agendamento> listarDados(String email) {
        return agendamentoRepository.findByEmail(email);
    }
}
