package EmergeOdontoAPI.EmergeOdontoAPI.repositories;

import EmergeOdontoAPI.EmergeOdontoAPI.entities.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    List<Agendamento> findByEmail(String email);
}
