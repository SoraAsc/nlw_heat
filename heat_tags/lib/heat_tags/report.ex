defmodule HeatTags.Report do
  use Ecto.Schema

  import Ecto.Changeset

  @required_params [:report_text]
  @derive {Jason.Encoder, only: [:id] ++ @required_params}

  schema "reports" do
    field :report_text, :string
    timestamps()
  end

  def changeset(params) do
    %__MODULE__{}
    |> cast(params, @required_params)
    |> validate_required(@required_params)
    |> validate_length(:report_text, min: 10)
  end
end
