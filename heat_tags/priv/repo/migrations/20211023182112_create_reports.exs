defmodule HeatTags.Repo.Migrations.CreateReports do
  use Ecto.Migration

  def change do
    create table(:reports) do
      add :report_text, :string

      timestamps()
    end
  end
end
