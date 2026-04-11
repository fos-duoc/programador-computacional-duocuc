<div align="center">

![Sprint](https://img.shields.io/badge/Sprint-2-673AB7?style=flat-square)
![Semana](https://img.shields.io/badge/Semana-05-blue?style=flat-square)

# `Sprint 2: Features Secundarias`

</div>

---

### 🎯 Objetivos Sprint 2

```
┌─────────────────────────────────────────┐
│              SPRINT 2                   │
├─────────────────────────────────────────┤
│  ✓ Features secundarias del dominio     │
│  ✓ Integración con servicios externos   │
│  ✓ Notificaciones (email/push)          │
│  ✓ Reportes/Dashboard                   │
│  ✓ Tests de integración                 │
└─────────────────────────────────────────┘
```

```typescript
// Dashboard Component
@Component({
  template: `
    <div class="dashboard-grid">
      <app-stats-card
        *ngFor="let stat of stats"
        [title]="stat.title"
        [value]="stat.value"
        [trend]="stat.trend">
      </app-stats-card>

      <app-chart
        [data]="chartData"
        type="line">
      </app-chart>

      <app-recent-activity
        [activities]="activities">
      </app-recent-activity>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  stats$: Observable<DashboardStats>;

  ngOnInit() {
    this.stats$ = this.dashboardService.getStats();
  }
}
```

| Feature | Prioridad |
|:--------|:----------|
| Dashboard | Alta |
| Notificaciones | Media |
| Exportar PDF | Baja |

---

<div align="center">
<sub>Taller de Título · Experiencia 2</sub>
</div>
