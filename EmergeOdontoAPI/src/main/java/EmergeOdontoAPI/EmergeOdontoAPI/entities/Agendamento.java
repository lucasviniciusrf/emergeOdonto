package EmergeOdontoAPI.EmergeOdontoAPI.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table (name = "dados")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column (nullable = false, length = 100)
    private String nome;
    @Column (nullable = false, length = 20)
    private String telefone;
    @Column (nullable = false, length = 100)
    private String email;
    @Column (nullable = false, length = 100)
    private String senha;
    @Column (nullable = false)
    private String data;
    @Column (nullable = false)
    private String horario;
    @Column (nullable = false)
    private String especialidade;

}
