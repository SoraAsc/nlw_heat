defmodule HeatTags.Reports.Create do
  alias HeatTags.{Report, Repo}

  def call(params) do
    params
    |> Report.changeset()
    |> Repo.insert()
    |> handle_insert()
  end

  defp handle_insert({:ok, %Report{}} = result), do: result
  defp handle_insert({:error, result}), do: {:error, %{result: result, status: :bad_request}}
end
