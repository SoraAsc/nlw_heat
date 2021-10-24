defmodule HeatTags.Tags.PickEmails do
  import Ecto.Query
  alias HeatTags.{Message, Repo}

  def call do
    # today = Date.utc_today()

    # query =
    # from message in Message,
    # where: type(message.inserted_at, :date) == ^today,
    # select: message.email,
    # distinct: true

    query = from message in Message, select: message.email, distinct: true
    Repo.all(query)
  end
end
